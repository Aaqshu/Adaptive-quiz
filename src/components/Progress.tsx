import React from 'react';
import { AnsweredQuestion } from '../types';
import { getDifficultyColor } from '../utils/quizHelpers';

interface ProgressProps {
  answeredQuestions: AnsweredQuestion[];
  totalQuestions: number;
}

const Progress: React.FC<ProgressProps> = ({ answeredQuestions, totalQuestions }) => {
  const progress = (answeredQuestions.length / totalQuestions) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Your progress</span>
        <span className="text-sm font-medium text-gray-700">
          {answeredQuestions.length} / {totalQuestions} questions
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {answeredQuestions.length > 0 && (
        <div className="flex mt-4 space-x-1 overflow-x-auto py-1">
          {answeredQuestions.map((answer, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                answer.isCorrect
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-rose-100 text-rose-800'
              } transition-all ${getDifficultyColor(answer.difficulty)}`}
              title={`Question ${index + 1}: ${answer.isCorrect ? 'Correct' : 'Incorrect'}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Progress;