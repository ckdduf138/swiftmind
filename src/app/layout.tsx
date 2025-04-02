import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'SwiftMind',
  description: '긍정적/부정적 문장 변환 웹사이트',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
