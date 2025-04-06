'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-2">앗, 길을 잃으셨나요?</p>
      <p className="text-gray-500 mb-6">
        요청하신 페이지를 찾을 수 없어요. <br className="sm:hidden" />
        그래도 괜찮아요, 우리는 언제든 다시 시작할 수 있어요.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition-colors"
      >
        메인 페이지로 돌아가기
      </Link>

      <div className="mt-10 max-w-xl w-full bg-white border border-gray-200 rounded-lg p-6 shadow">
        <p className="text-left text-gray-700 mb-2">💡 긍정적인 문장 예시:</p>
        <p className="text-blue-600 text-left">
          “지금은 길을 잃었지만, 덕분에 더 나은 방향을 찾을 수 있어요.”
        </p>
        <p className="text-left text-gray-700 mt-4 mb-2">☁️ 부정적인 문장 예시:</p>
        <p className="text-red-600 text-left">
          “여기까지 와서도 결국 실패했네.”
        </p>
      </div>
    </div>
  );
}
