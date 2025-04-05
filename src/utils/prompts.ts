type Prompt = {
  SYSTEM: string;
  USER: (text: string) => string;
};

const PROMPT_REFRAME: Prompt = {
  SYSTEM: `
    너는 사용자의 문장을 자연스럽고 일상적인 톤으로 긍정적, 부정적으로 바꿔주는 역할이야.
    문장을 긍정적으로, 부정적으로 바꿔줘.
    출력은 항상 JSON 형태로 해. 키는 "positive"와 "negative"만 사용해줘.
    `,

  USER: (text: string) => ` 
    다음 문장을 긍정적으로 바꿔줘.
    긍정 문장은 "positive"에, 부정 문장은 "negative"에 넣어줘.
    문장: "${text}"
    응답 형식:
    {"positive": "긍정 문장", "negative": "부정 문장"}
    `,
};


const PROMPT_LIST: Prompt[] = [
  PROMPT_REFRAME
];

// 랜덤 프롬프트 가져오기
export const getRandomPrompt = (): Prompt => {
  const randomIndex = Math.floor(Math.random() * PROMPT_LIST.length);
  return PROMPT_LIST[randomIndex];
};
