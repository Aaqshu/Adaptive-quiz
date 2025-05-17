import React from 'react';
import { Question as QuestionType } from '../types';
import { getDifficultyBgColor } from '../utils/quizHelpers';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({ question, questionNumber, totalQuestions }) => {
  return (
    <div className="mb-8 animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${getDifficultyBgColor(question.difficulty)}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">{question.text}</h2>
    </div>
  );
};

export default Question;