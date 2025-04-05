import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PROMPTS = {
  SYSTEM: "너는 텍스트 감정 변환기야. 입력된 문장을 긍정적 또는 부정적으로 변환해줘.",
  USER: (text: string) =>
    `다음 문장을 긍정적, 부정적 두 가지로 변환해줘. 
    JSON 형식으로 정확히 응답해. 
    문장: "${text}" 
    응답 예시: {"positive": "긍정적 문장", "negative": "부정적 문장"}`,
};

export const POST = async (req: NextRequest) => {
  try {
    const secret = req.headers.get("x-api-key");
    if (secret !== process.env.NEXT_PUBLIC_CONVERT_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
