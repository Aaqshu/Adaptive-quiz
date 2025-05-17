import React, { useState, useEffect } from 'react';
import { Question as QuestionType, QuizState, AnsweredQuestion } from '../types';
import { getInitialQuestion, getNextQuestion, adjustDifficulty, calculateQuizSummary } from '../utils/quizHelpers';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import Feedback from './Feedback';
import Progress from './Progress';
import Results from './Results';
import { Psychology, MenuBook } from '@mui/icons-material';

const TOTAL_QUESTIONS = 10;

const Quiz: React.FC = () => {
  const initialQuestion = getInitialQuestion();
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    questions: [initialQuestion],
    answeredQuestions: [],
    currentDifficulty: 'medium',
    quizCompleted: false,
    showFeedback: false,
    selectedAnswerId: null,
  });
  
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  
  const handleSelectAnswer = (answerId: string) => {
    const selectedAnswer = currentQuestion.options.find(option => option.id === answerId);
    if (!selectedAnswer) return;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswerId: answerId,
      showFeedback: true,
    }));
  };
  
  const handleNextQuestion = () => {
    const isCorrect = currentQuestion.options.find(
      option => option.id === quizState.selectedAnswerId
    )?.isCorrect || false;
    
    const answeredQuestion: AnsweredQuestion = {
      questionId: currentQuestion.id,
      selectedAnswerId: quizState.selectedAnswerId || '',
      isCorrect,
      difficulty: currentQuestion.difficulty,
    };
    
    const updatedAnsweredQuestions = [...quizState.answeredQuestions, answeredQuestion];
    
    if (updatedAnsweredQuestions.length >= TOTAL_QUESTIONS) {
      setQuizState(prev => ({
        ...prev,
        answeredQuestions: updatedAnsweredQuestions,
        quizCompleted: true,
        showFeedback: false,
      }));
      return;
    }
    
    const newDifficulty = adjustDifficulty(currentQuestion.difficulty, isCorrect);
    const nextQuestion = getNextQuestion(updatedAnsweredQuestions, newDifficulty, currentQuestion);
    
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      questions: [...prev.questions, nextQuestion],
      answeredQuestions: updatedAnsweredQuestions,
      currentDifficulty: newDifficulty,
      showFeedback: false,
      selectedAnswerId: null,
    }));
  };
  
  const restartQuiz = () => {
    const newInitialQuestion = getInitialQuestion();
    setQuizState({
      currentQuestionIndex: 0,
      questions: [newInitialQuestion],
      answeredQuestions: [],
      currentDifficulty: 'medium',
      quizCompleted: false,
      showFeedback: false,
      selectedAnswerId: null,
    });
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fadeIn">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="bg-indigo-600 p-3 rounded-2xl animate-bounce-slow">
            <Psychology className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Adaptive Quiz</h1>
        <p className="text-lg text-gray-600">
          Test your knowledge with questions that adapt to your skill level
        </p>
      </div>
      
      {!quizState.quizCompleted ? (
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-scaleIn hover-scale">
          <Progress
            answeredQuestions={quizState.answeredQuestions}
            totalQuestions={TOTAL_QUESTIONS}
          />
          
          <Question
            question={currentQuestion}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
          
          <AnswerOptions
            options={currentQuestion.options}
            selectedAnswerId={quizState.selectedAnswerId}
            showFeedback={quizState.showFeedback}
            onSelectAnswer={handleSelectAnswer}
          />
          
          {quizState.showFeedback && (
            <Feedback
              question={currentQuestion}
              isCorrect={
                currentQuestion.options.find(
                  option => option.id === quizState.selectedAnswerId
                )?.isCorrect || false
              }
              onNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      ) : (
        <Results
          summary={calculateQuizSummary(quizState.answeredQuestions)}
          onRestartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;