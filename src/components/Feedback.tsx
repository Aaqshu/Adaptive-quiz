import React from 'react';
import { Question } from '../types';
import { ArrowForward } from '@mui/icons-material';

interface FeedbackProps {
  question: Question;
  isCorrect: boolean;
  onNextQuestion: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({ question, isCorrect, onNextQuestion }) => {
  return (
    <div className="mb-8 animate-fadeIn">
      <div className={`p-6 rounded-xl border-2 ${
        isCorrect 
          ? 'bg-emerald-50 border-emerald-200' 
          : 'bg-rose-50 border-rose-200'
      }`}>
        <h3 className={`text-xl font-bold mb-3 ${
          isCorrect ? 'text-emerald-700' : 'text-rose-700'
        }`}>
          {isCorrect ? 'Excellent!' : 'Not quite right'}
        </h3>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">{question.explanation}</p>
        <button
          onClick={onNextQuestion}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium text-lg"
        >
          Next Question
          <ArrowForward className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Feedback;