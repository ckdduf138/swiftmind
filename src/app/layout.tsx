import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMind - AI 감정 문장 변환 사이트",
  description: "부정적인 문장을 긍정적으로, 긍정적인 문장을 공감형으로 바꿔주는 AI 감정 문장 리프레이밍 도구입니다.",
  metadataBase: new URL("https://swiftmind.vercel.app"),
  icons: {
    icon: "/images/favicon.svg",
  },
  keywords: [
    "AI 감정 분석기",
    "감정 문장 변환",
    "AI 문장 리프레이밍",
    "자연어 처리",
    "GPT 감정 분석",
    "긍정 문장 생성기",
    "부정 문장 수정기",
    "AI 공감 챗봇",
    "심리 언어 분석",
    "감정 리터칭 도구",
    "자기 긍정 훈련",
    "자존감 향상 앱",
    "AI 심리상담",
    "문장 말투 개선",
    "문장 감정 변환기",
    "AI 기반 감정코칭",
    "자기개선 도구",
    "공감 문장 생성",
    "AI 감정코칭 웹사이트",
    "자기 수용 훈련",
  ],
  openGraph: {
    title: "SwiftMind - AI 감정 문장 변환 사이트",
    description: "AI가 문장의 감정을 분석하고 긍정적이고 공감 가는 표현으로 자연스럽게 바꿔줍니다.",
    url: "https://swiftmind.vercel.app",
    siteName: "SwiftMind",
    images: [
      {
        url: "/images/favicon.svg",
        width: 1200,
        height: 630,
        alt: "SwiftMind - 감정 문장 변환 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftMind - 감정 문장을 AI로 리프레이밍하세요",
    description: "AI 기반 감정 문장 변환기로 부정적인 문장을 긍정적으로, 공감 가는 표현으로 쉽게 바꿔보세요.",
    images: ["/images/favicon.svg"],
  },
  authors: [{ name: "SwiftMind", url: "https://swiftmind.vercel.app" }],
  creator: "SwiftMind",
  publisher: "SwiftMind",
  verification: {
    google: "V0LWQEMkzQlQoG6mGSp1UFldKcpsvuxhbgMof6G0fUE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
