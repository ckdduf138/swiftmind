import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMind - 감정 문장 변환기",
  description: "부정적인 문장을 자연스럽게 긍정적 또는 현실적으로 바꿔주는 감정 문장 변환기입니다.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://swiftmind.vercel.app"),
  openGraph: {
    title: "SwiftMind - 감정 문장 변환기",
    description: "감정을 더 잘 표현할 수 있도록 문장을 바꿔주는 도구",
    url: "https://swiftmind.vercel.app",
    siteName: "SwiftMind",
    images: [
      {
        url: "/og-image.png",
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
    description: "감정을 더 잘 표현할 수 있도록 문장을 바꿔주는 도구",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="google-site-verification" content="V0LWQEMkzQlQoG6mGSp1UFldKcpsvuxhbgMof6G0fUE" />
        
        <meta name="title" content="SwiftMind – 감정 문장 변환기" />
        <meta name="description" content="감정을 더 부드럽게, 솔직하게 표현할 수 있도록 문장을 긍정적 또는 부정적으로 바꿔주는 AI 도구입니다." />
        <meta name="keywords" content="문장 감정 변환, 감정 표현 바꾸기, 긍정적인 문장 만들기, 자기비하 극복, 부정적인 표현 바꾸기, 긍정적 자기 인식, 부정적 감정 표현, 감정 언어 분석, 문장 리프레이밍, 자존감 회복, 자기수용, 자기 긍정 훈련, 감정코칭 도구, 감정 분석, 문장 리터칭, 감정 개선, 심리 언어 도구, GPT 감정 변환, 말투 개선, 따뜻한 문장 만들기, 공감 문장 변환, 자기개선 웹사이트, AI 감정 도우미, 심리상담 보조 도구" />
        <meta name="author" content="SwiftMind Team" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swiftmind.vercel.app/" />
        <meta property="og:title" content="SwiftMind – 감정 문장 변환기" />
        <meta property="og:description" content="부정적인 표현을 자연스럽게 바꿔주는 따뜻한 문장 리프레이밍 도구" />
        <meta property="og:image" content="https://swiftmind.vercel.app/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SwiftMind – 감정 문장 변환기" />
        <meta name="twitter:description" content="AI가 감정을 긍정적으로 리프레이밍해주는 서비스" />
        <meta name="twitter:image" content="https://swiftmind.vercel.app/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
