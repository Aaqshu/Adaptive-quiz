import { Difficulty, Question, AnsweredQuestion, QuizSummary, Topic } from '../types';
import { questionPool } from '../data/questions';

export const getInitialQuestion = (): Question => {
  const mediumQuestions = questionPool.filter(q => q.difficulty === 'medium');
  return mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
};

export const adjustDifficulty = (currentDifficulty: Difficulty, isCorrect: boolean): Difficulty => {
  if (isCorrect) {
    return currentDifficulty === 'easy' ? 'medium' : 'hard';
  } else {
    return currentDifficulty === 'hard' ? 'medium' : 'easy';
  }
};

export const getNextQuestion = (
  answeredQuestions: AnsweredQuestion[],
  newDifficulty: Difficulty,
  currentQuestion: Question
): Question => {
  // Get all answered question IDs to avoid repeats
  const answeredQuestionIds = answeredQuestions.map(q => q.questionId);
  
  // Filter questions by new difficulty and same topic, excluding already answered questions
  let candidateQuestions = questionPool.filter(
    q => 
      q.difficulty === newDifficulty && 
      q.topic === currentQuestion.topic &&
      !answeredQuestionIds.includes(q.id)
  );
  
  // If no questions available in same topic with the target difficulty, try a related topic
  if (candidateQuestions.length === 0) {
    const relatedTopics = getRelatedTopics(currentQuestion.topic);
    candidateQuestions = questionPool.filter(
      q => 
        q.difficulty === newDifficulty && 
        relatedTopics.includes(q.topic) &&
        !answeredQuestionIds.includes(q.id)
    );
  }
  
  // If still no questions, widen search to any topic with target difficulty
  if (candidateQuestions.length === 0) {
    candidateQuestions = questionPool.filter(
      q => q.difficulty === newDifficulty && !answeredQuestionIds.includes(q.id)
    );
  }
  
  // If exhausted all questions at target difficulty, try any difficulty
  if (candidateQuestions.length === 0) {
    candidateQuestions = questionPool.filter(q => !answeredQuestionIds.includes(q.id));
  }
  
  // Return a random question from candidates, or the first question as fallback
  return candidateQuestions.length > 0
    ? candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)]
    : questionPool[0];
};

const getRelatedTopics = (topic: Topic): Topic[] => {
  const topicRelations: Record<Topic, Topic[]> = {
    javascript: ['typescript', 'react', 'webDevelopment'],
    typescript: ['javascript', 'react', 'webDevelopment'],
    react: ['javascript', 'typescript', 'webDevelopment'],
    css: ['html', 'webDevelopment'],
    html: ['css', 'webDevelopment'],
    webDevelopment: ['javascript', 'typescript', 'react', 'css', 'html'],
    computerScience: ['algorithms', 'dataStructures', 'networking'],
    algorithms: ['computerScience', 'dataStructures'],
    dataStructures: ['computerScience', 'algorithms'],
    networking: ['computerScience', 'webDevelopment']
  };
  
  return topicRelations[topic] || [];
};

export const calculateQuizSummary = (answeredQuestions: AnsweredQuestion[]): QuizSummary => {
  const correctAnswers = answeredQuestions.filter(q => q.isCorrect).length;
  
  const byDifficulty = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 }
  };
  
  answeredQuestions.forEach(question => {
    byDifficulty[question.difficulty].total += 1;
    if (question.isCorrect) {
      byDifficulty[question.difficulty].correct += 1;
    }
  });
  
  return {
    totalQuestions: answeredQuestions.length,
    correctAnswers,
    incorrectAnswers: answeredQuestions.length - correctAnswers,
    byDifficulty
  };
};

export const getDifficultyColor = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'easy':
      return 'text-emerald-600';
    case 'medium':
      return 'text-amber-600';
    case 'hard':
      return 'text-rose-600';
    default:
      return 'text-gray-600';
  }
};

export const getDifficultyBgColor = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'easy':
      return 'bg-emerald-100 text-emerald-800';
    case 'medium':
      return 'bg-amber-100 text-amber-800';
    case 'hard':
      return 'bg-rose-100 text-rose-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};