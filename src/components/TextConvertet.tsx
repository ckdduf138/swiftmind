'use client';

import { useState } from 'react';
import Loader from './Loader';

const TextConverter = () => {
  const [inputText, setInputText] = useState<string>('');
  const [positiveText, setPositiveText] = useState("");
  const [negativeText, setNegativeText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleConvert = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      if (response.ok) {
        setPositiveText(data.positiveText);
        setNegativeText(data.negativeText);
      } else {
        console.error("변환 실패:", data.error);
      }

    } catch (error) {
      console.error("API 요청 오류:", error);
    }
    setLoading(false);
  };

  const handleCopy = async (text: string) => {
    try {
      if (text !== '') {
        await navigator.clipboard.writeText(text);
      } else {
      }
    } catch (error) {
      console.error("클립보드에 복사하는데 실패했어요.", error);
    }
  };

  return (
    <div className="flex flex-col flex-grow items-center p-4 sm:p-6 md:p-8 gap-6">
      {loading && <Loader />}

      <div className="flex flex-col relative w-full max-w-3xl items-center p-2 sm:p-4 gap-4 bg-gray-50 rounded-lg">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="문장을 입력하세요."
          rows={4}
          maxLength={500}
          className="w-full max-w-3xl p-3 border-2 border-black-300 rounded-lg shadow-md bg-white-100 resize-none
          focus:outline focus:outline-1 focus:outline-black-300 focus:border-black-300"
        />
        <div className="absolute bottom-2 right-3 text-gray-500 text-sm">
          {inputText.length} / 500
        </div>

        <button
          onClick={handleConvert}
          disabled={loading}
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-500 disabled:bg-gray-400 transition-colors cursor-pointer"
        >
          변환하기
        </button>
      </div>

      {/* 결과 필드 */}
      <div className="w-full flex flex-col items-center p-4 sm:p-6 md:p-8 gap-6">
        <div className="relative w-full max-w-3xl">
          <span className="absolute -left-4 -top-4 text-3xl text-blue-500">😀</span>
          <img className="absolute right-2 top-2 cursor-pointer" src='/images/copy-right.svg' alt='copy' onClick={() => handleCopy(positiveText)}></img>
          <textarea
            className="w-full p-4 border-2 border-blue-300 rounded-lg shadow-md bg-blue-100 resize-none
            focus:outline focus:outline-1 focus:outline-blue-300 focus:border-blue-300"
            rows={4}
            value={positiveText}
            readOnly
          />
        </div>

        <div className="relative w-full max-w-3xl">
          <span className="absolute -left-4 -top-4 text-3xl text-red-500">☹️</span>
          <img className="absolute right-2 top-2 cursor-pointer" src='/images/copy-right.svg' alt='copy' onClick={() => handleCopy(negativeText)}></img>
          <textarea
            className="w-full p-4 border-2 border-red-300 rounded-lg shadow-md bg-red-100 resize-none
            focus:outline focus:outline-1 focus:outline-red-300 focus:border-red-300"
            rows={4}
            value={negativeText}
            readOnly
          />
        </div>
      </div>

    </div>
    
  );
};

export default TextConverter;
