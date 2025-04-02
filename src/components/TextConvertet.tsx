'use client';

import { useState } from 'react';
import Button from './Loader';
import Loader from './Loader';

const TextConverter = () => {
  const [inputText, setInputText] = useState<string>('');
  const [positiveText, setPositiveText] = useState("");
  const [negativeText, setNegativeText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleConvert = () => {
    setPositiveText(`😊 ${inputText}`);
    setNegativeText(`😢 ${inputText}`);
  };

  return (
    <div className="flex flex-col flex-grow items-center p-4 sm:p-6 md:p-8 gap-6">
      {loading && <Loader />}

      <div className="flex flex-col w-full max-w-3xl items-center p-2 sm:p-4 gap-4 bg-gray-50 rounded-lg">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="문장을 입력하세요."
          rows={4}
          className="w-full max-w-3xl p-3 border border-black-300 rounded-lg shadow-md bg-white-100 resize-none
          focus:outline focus:outline-2 focus:outline-gray-500 focus:border-gray-300"
        />
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
        <textarea className="w-full max-w-3xl p-3 border border-blue-300 rounded-lg shadow-md bg-blue-100 resize-none
          focus:outline focus:outline-2 focus:outline-blue-500 focus:border-blue-300" 
          value={positiveText} readOnly />

        <textarea className="w-full max-w-3xl p-3 border border-red-300 rounded-lg shadow-md bg-red-100 resize-none
          focus:outline focus:outline-2 focus:outline-red-500 focus:border-red-300" 
          value={negativeText} readOnly />
      </div>
    </div>
    
  );
};

export default TextConverter;
