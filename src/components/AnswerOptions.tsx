import React from 'react';
import { Answer } from '../types';
import { CheckCircle, Cancel, Celebration, SentimentVeryDissatisfied } from '@mui/icons-material';

interface AnswerOptionsProps {
  options: Answer[];
  selectedAnswerId: string | null;
  showFeedback: boolean;
  onSelectAnswer: (answerId: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  selectedAnswerId,
  showFeedback,
  onSelectAnswer,
}) => {
  const getOptionClasses = (option: Answer) => {
    const baseClasses = 'p-6 mb-4 border-2 rounded-xl flex items-center transition-all duration-300 hover:shadow-md animate-slideIn hover-scale';
    
    if (!showFeedback) {
      return selectedAnswerId === option.id
        ? `${baseClasses} border-indigo-500 bg-indigo-50 shadow-indigo-100`
        : `${baseClasses} border-gray-200 hover:border-indigo-300 hover:bg-indigo-50`;
    }
    
    if (option.isCorrect) {
      return `${baseClasses} border-emerald-500 bg-emerald-50 shadow-emerald-100`;
    }
    
    if (selectedAnswerId === option.id && !option.isCorrect) {
      return `${baseClasses} border-rose-500 bg-rose-50 shadow-rose-100 animate-wrong`;
    }
    
    return `${baseClasses} border-gray-200 opacity-60`;
  };

  return (
    <div className="space-y-4 mb-8">
      {options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => !showFeedback && onSelectAnswer(option.id)}
          disabled={showFeedback}
          className={getOptionClasses(option)}
          style={{ animationDelay: `${index * 0.1}s` }}
          aria-selected={selectedAnswerId === option.id}
        >
          <div className="flex-1 text-left">
            <span className="text-lg font-semibold mr-3">{option.id.toUpperCase()}.</span>
            <span className="text-lg">{option.text}</span>
          </div>
          {showFeedback && option.isCorrect && (
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-emerald-500 ml-3 flex-shrink-0 animate-scaleIn" />
              <Celebration className="h-6 w-6 text-amber-500 ml-2 flex-shrink-0 animate-celebrate" />
            </div>
          )}
          {showFeedback && selectedAnswerId === option.id && !option.isCorrect && (
            <div className="flex items-center">
              <Cancel className="h-6 w-6 text-rose-500 ml-3 flex-shrink-0 animate-scaleIn" />
              <SentimentVeryDissatisfied className="h-6 w-6 text-rose-400 ml-2 flex-shrink-0 animate-sad" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;