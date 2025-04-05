import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ALLOWED_ORIGINS = ['http://localhost:3000'];

const LIMITED_COUNT = 30;

const PROMPTS = {
  SYSTEM: `너는 텍스트 감정 변환기야. 
    입력된 문장의 말투와 어조를 최대한 유지하면서, 같은 문장을 긍정적 혹은 부정적인 감정으로 바꿔줘.
    반드시 JSON 형식으로 응답해.`,
  USER: (text: string) =>
    `다음 문장을 긍정적, 부정적 두 가지 감정으로 바꿔줘. 
    문장의 말투, 문체, 어조는 그대로 유지해야 해. 
    반드시 JSON 형식으로 응답해.
    문장: "${text}" 
    응답 예시: {"positive": "긍정적 문장", "negative": "부정적 문장"}`,
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
