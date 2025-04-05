import { getRandomPrompt } from "@/utils/prompts";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ALLOWED_ORIGINS = ['http://localhost:3000', 'https://swiftmind.vercel.app'];

const PROMPTS = {
  SYSTEM: `너는 텍스트 감정 변환기야. 
    입력된 문장의 말투와 어조를 유지하면서, 부정적인 표현을 긍정적 또는 부정적으로 바꿔줘.
    특히 '자기 낙인을 바꿔주기' 방식으로, 부정적인 단어를 중립적이거나 긍정적인 단어로 자연스럽게 치환해.
    (예: '소심해' → '신중해', '게을러' → '여유로워')

    JSON 형식으로 정확히 응답해야 해.`,

  USER: (text: string) =>
    `다음 문장을 긍정적, 부정적 두 가지 감정으로 바꿔줘.
    말투, 문체, 어조는 유지하고, 과하게 꾸미지 말고 자연스럽게 바꿔줘.
    '말 바꾸기' 스타일을 적용해줘. 
    즉, 자기비하 표현은 현실적인 긍정적 단어로 치환하고, 부정적인 표현은 감정을 더 잘 드러내는 방향으로 바꿔줘.

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

    const prompt = getRandomPrompt();
    const systemMessage = prompt.SYSTEM;
    const userMessage = prompt.USER("난 맨날 실수만 해");

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
