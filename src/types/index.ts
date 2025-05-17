export type Difficulty = 'easy' | 'medium' | 'hard';

export type Topic = 
  | 'javascript' 
  | 'react' 
  | 'css' 
  | 'html' 
  | 'typescript'
  | 'webDevelopment'
  | 'computerScience'
  | 'algorithms'
  | 'dataStructures'
  | 'networking';

export interface Question {
  id: string;
  text: string;
  topic: Topic;
  difficulty: Difficulty;
  options: Answer[];
  explanation: string;
}

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  answeredQuestions: AnsweredQuestion[];
  currentDifficulty: Difficulty;
  quizCompleted: boolean;
  showFeedback: boolean;
  selectedAnswerId: string | null;
}

export interface AnsweredQuestion {
  questionId: string;
  selectedAnswerId: string;
  isCorrect: boolean;
  difficulty: Difficulty;
}

export interface QuizSummary {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  byDifficulty: {
    easy: { total: number; correct: number };
    medium: { total: number; correct: number };
    hard: { total: number; correct: number };
  };
}