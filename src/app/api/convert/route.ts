import { getRandomPrompt } from "@/utils/prompts";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ALLOWED_ORIGINS = ['http://localhost:3000', 'https://swiftmind.vercel.app'];

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

    const prompt = getRandomPrompt();
    const systemMessage = prompt.SYSTEM;
    const userMessage = prompt.USER(text);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
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
