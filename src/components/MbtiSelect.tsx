'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MBTISelectProps {
  selectedMbti: string;
  setSelectedMbti: (mbti: string) => void;
}

const mbtiList = [
  'ENFP', 'ENFJ', 'ENTP', 'ENTJ',
  'INFP', 'INFJ', 'INTP', 'INTJ',
  'ESFP', 'ESFJ', 'ESTP', 'ESTJ',
  'ISFP', 'ISFJ', 'ISTP', 'ISTJ',
] as const;

const MBTISelect: React.FC<MBTISelectProps> = ({ selectedMbti, setSelectedMbti }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (mbti: string) => {
    setSelectedMbti(mbti);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-2 relative">
      <label className="text-sm font-semibold text-gray-600">
        ✨ 어떤 MBTI 스타일로 말할까요?
      </label>

      {/* 선택된 항목 영역 */}
      <div
        className="w-full p-3 rounded-lg border-2 border-gray-300 bg-white shadow-sm
        text-gray-800 font-medium cursor-pointer flex justify-between items-center
        hover:border-green-400 focus:outline-none transition-all duration-200"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedMbti || '선택하지 않음'}
        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* 드롭다운 영역 */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto z-10
              border-2 border-gray-200 bg-white rounded-lg shadow-lg"
          >
            {mbtiList.map((mbti) => (
              <li
                key={mbti}
                onClick={() => handleSelect(mbti)}
                className={`px-4 py-3 cursor-pointer hover:bg-green-100 text-sm font-medium text-gray-700 ${
                  mbti === selectedMbti ? 'bg-green-50' : ''
                }`}
              >
                {mbti}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MBTISelect;
