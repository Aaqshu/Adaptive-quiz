import React from 'react';
import { QuizSummary } from '../types';
import { EmojiEvents, MenuBook, Psychology } from '@mui/icons-material';

interface ResultsProps {
  summary: QuizSummary;
  onRestartQuiz: () => void;
}

const Results: React.FC<ResultsProps> = ({ summary, onRestartQuiz }) => {
  const correctPercentage = Math.round((summary.correctAnswers / summary.totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (correctPercentage >= 80) {
      return "Excellent! You've demonstrated exceptional knowledge.";
    } else if (correctPercentage >= 60) {
      return "Good job! You have a solid understanding of the topics.";
    } else if (correctPercentage >= 40) {
      return "Nice effort! There's room for improvement with more practice.";
    } else {
      return "Keep learning! This is a great opportunity to strengthen your knowledge.";
    }
  };
  
  const getDifficultyStatsBar = (difficulty: 'easy' | 'medium' | 'hard') => {
    const { total, correct } = summary.byDifficulty[difficulty];
    if (total === 0) return null;
    
    const percentage = Math.round((correct / total) * 100) || 0;
    const bgColors = {
      easy: 'bg-emerald-500',
      medium: 'bg-amber-500',
      hard: 'bg-rose-500',
    };
    
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium capitalize">{difficulty}</span>
          <span className="text-sm font-medium">{correct}/{total} ({percentage}%)</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className={`h-2 rounded-full ${bgColors[difficulty]}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
          <EmojiEvents className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
        <p className="text-gray-600">{getPerformanceMessage()}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">{summary.totalQuestions}</div>
            <div className="text-sm text-gray-500">Total Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">{summary.correctAnswers}</div>
            <div className="text-sm text-gray-500">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-600">{summary.incorrectAnswers}</div>
            <div className="text-sm text-gray-500">Incorrect</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Psychology className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Performance by Difficulty</h3>
          </div>
          {getDifficultyStatsBar('easy')}
          {getDifficultyStatsBar('medium')}
          {getDifficultyStatsBar('hard')}
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onRestartQuiz}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <MenuBook className="w-5 h-5 mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Results;