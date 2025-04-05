import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ALLOWED_ORIGINS = ['http://localhost:3000', 'https://swiftmind.vercel.app'];

const PROMPTS = {
  SYSTEM: `너는 텍스트 감정 변환기야.
  사용자가 입력한 문장을 같은 문체와 어조를 유지하면서 의미만 긍정적 또는 부정적으로 바꿔줘.
  감정의 강도는 과하지 않게 조절하고, 너무 감성적으로 만들지 마.
  긍정은 부정적인 표현을 더 나은 방향으로 해석해서 바꿔줘.
  부정은 긍정적인 표현을 약간 부정적으로 재해석해서 바꿔줘.
  반드시 정확한 JSON 형식으로 응답해.`,

  USER: (text: string) =>
    `다음 문장을 긍정적, 부정적으로 의미를 재해석해서 바꿔줘.
    감정은 과하지 않게 조절하고, 말투나 문장은 최대한 원래대로 유지해.
    반드시 JSON 형식으로만 응답해.
    문장: "${text}"
    예시 응답: {"positive": "긍정적 문장", "negative": "부정적 문장"}`,
};


export const POST = async (req: NextRequest) => {
  try {
    const origin = req.headers.get('origin');
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: '허용되지 않은 요청입니다.' }, { status: 403 });
    }

    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: '텍스트를 입력하세요.' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: PROMPTS.SYSTEM },
        { role: "user", content: PROMPTS.USER(text) },
      ],
    });

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(response.choices[0]?.message?.content || "{}");
    } catch (error) {
      console.error("JSON 파싱 오류:", error)
      return NextResponse.json({ error: "OpenAI 응답이 올바른 JSON 형식이 아닙니다." }, { status: 500 });
    }

    const positiveText = parsedResponse.positive || "변환 실패";
    const negativeText = parsedResponse.negative || "변환 실패";

    return NextResponse.json({ positiveText, negativeText });
  } catch (error) {
    console.error("OpenAI API 요청 실패:", error);
    return NextResponse.json({ error: "OpenAI API 요청 실패" + error }, { status: 500 });
  }
};
