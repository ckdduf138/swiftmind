import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMind | 감정을 긍정적으로 리프레이밍하는 AI 도구",
  description:
    "SwiftMind는 문장의 감정을 분석하고, 부정문을 긍정적으로 또는 공감형 표현으로 자연스럽게 리프레이밍해주는 AI 감정 문장 전환 도구입니다.",
  metadataBase: new URL("https://swiftmind.vercel.app"),
  icons: {
    icon: "/images/favicon.svg",
  },
  keywords: [
    "AI 감정 분석기",
    "부정문 긍정문 변환",
    "감정 리프레이밍",
    "AI 문장 전환기",
    "감정 표현 수정",
    "GPT 감정 분석",
    "AI 감정 리터칭",
    "자연어 처리",
    "AI 공감 문장 생성",
    "심리 언어 분석",
    "문장 감정 분석",
    "감정코칭 웹사이트",
    "자기표현 향상 도구",
    "긍정적 표현 생성기",
    "공감 표현 추천기",
    "AI 감정코칭 서비스",
    "AI 기반 심리 도구",
    "자기개선 보조도구",
  ],
  openGraph: {
    title: "SwiftMind | 감정을 긍정적으로 리프레이밍하는 AI 도구",
    description:
      "SwiftMind는 문장의 감정을 분석하고, 부정문을 긍정적으로 또는 공감형 표현으로 자연스럽게 리프레이밍해주는 AI 감정 문장 전환 도구입니다.",
    url: "https://swiftmind.vercel.app",
    siteName: "SwiftMind",
    images: [
      {
        url: "/images/og-image.png",
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
    title: "SwiftMind | 감정을 긍정적으로 리프레이밍하는 AI 도구",
    description:
      "SwiftMind는 문장의 감정을 분석하고, 부정문을 긍정적으로 또는 공감형 표현으로 자연스럽게 리프레이밍해주는 AI 감정 문장 전환 도구입니다.",
    images: ["/images/og-image.png"],
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
