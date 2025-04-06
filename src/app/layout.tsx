import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMind - 감정 문장 변환기",
  description: "문장을 긍정적 또는 부정적으로 자연스럽게 바꿔주는 감정 표현 변환기입니다.",
  metadataBase: new URL("https://swiftmind.vercel.app"),
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "SwiftMind - 감정 문장 변환기",
    description: "문장을 긍정적 또는 부정적으로 자연스럽게 바꿔주는 감정 표현 변환기입니다.",
    url: "https://swiftmind.vercel.app",
    siteName: "SwiftMind",
    images: [
      {
        url: "/images/favicon.svg",
        width: 1200,
        height: 630,
        alt: "SwiftMind 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftMind - 감정 문장 변환기",
    description: "문장을 긍정적 또는 부정적으로 자연스럽게 바꿔주는 감정 표현 변환기입니다.",
    images: ["/images/favicon.svg"],
  },
  keywords: [
    "문장 감정 변환",
    "감정 표현 바꾸기",
    "긍정적인 문장 만들기",
    "자기비하 극복",
    "부정적인 표현 바꾸기",
    "긍정적 자기 인식",
    "감정 언어 분석",
    "문장 리프레이밍",
    "자존감 회복",
    "자기수용",
    "자기 긍정 훈련",
    "감정코칭 도구",
    "감정 분석",
    "문장 리터칭",
    "감정 개선",
    "심리 언어 도구",
    "GPT 감정 변환",
    "말투 개선",
    "따뜻한 문장 만들기",
    "공감 문장 변환",
    "자기개선 웹사이트",
    "AI 감정 도우미",
    "심리상담 보조 도구",
  ],
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
