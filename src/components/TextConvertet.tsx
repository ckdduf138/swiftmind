'use client';

import { useState } from 'react';

const TextConverter = () => {
  const [inputText, setInputText] = useState<string>('');
  const [convertedText, setConvertedText] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<'positive' | 'negative'>('positive');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleConversionTypeChange = (type: 'positive' | 'negative') => {
    setConversionType(type);
  };

  const handleConvertText = async () => {
    setLoading(true);
    try {
      let result = '';
      if (conversionType === 'positive') {
        result = `긍정적 변환: ${inputText}!!`;
      } else {
        result = `부정적 변환: ${inputText}...`;
      }
      setConvertedText(result);
    } catch (error) {
      setConvertedText('변환 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-grow items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">문장 변환기</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="문장을 입력하세요."
        rows={4}
        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary mb-4 sm:mb-6"
      />
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mb-4">
        <button
          className={`px-6 py-2 rounded-md text-white transition-colors duration-300 ${
            conversionType === 'positive' ? 'bg-primary' : 'bg-gray-400'
          } hover:bg-primary mb-2 sm:mb-0`}
          onClick={() => handleConversionTypeChange('positive')}
        >
          긍정적 문장
        </button>
        <button
          className={`px-6 py-2 rounded-md text-white transition-colors duration-300 ${
            conversionType === 'negative' ? 'bg-primary' : 'bg-gray-400'
          } hover:bg-primary`}
          onClick={() => handleConversionTypeChange('negative')}
        >
          부정적 문장
        </button>
      </div>
      <button
        onClick={handleConvertText}
        disabled={loading}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
      >
        {loading ? '변환 중...' : '변환하기'}
      </button>
      {convertedText && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-md w-full max-w-lg">
          <h3 className="text-2xl font-semibold mb-2">변환된 문장:</h3>
          <p className="text-lg">{convertedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextConverter;
