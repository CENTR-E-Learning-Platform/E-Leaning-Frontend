import React, { useState } from 'react';
import QuizSummaryBar from '../Components/QuizSummaryBar';
import AddNewQuestionModal from '../Components/AddNewQuestionModal';
import AddNewQuestionTrigger from '../Components/AddNewQuestionTrigger';
import QuestionCard from '../Components/QuestionCard';
import { useQuiz } from '../Context/QuizContext';
import PublishButton from '../Components/PublishButton';

const QuizQuestions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { QuizDataTime, setQuizDataTime } = useQuiz();

  const handleDeleteQuestion = (indexToDelete: number) => {
    if (!QuizDataTime || !QuizDataTime.Questions) return;
    
    const updatedQuestions = QuizDataTime.Questions.filter((_, index) => index !== indexToDelete);
    setQuizDataTime(prev => ({
      ...prev!,
      Questions: updatedQuestions
    }));
  };

  return (
    <>
      <QuizSummaryBar />
      
      <div className="w-full max-w-[1045px] flex flex-col gap-[24px]">
        {QuizDataTime?.Questions?.map((question, index) => (
          <QuestionCard 
            key={index} 
            question={question} 
            index={index} 
            onDelete={() => handleDeleteQuestion(index)}
          />
        ))}

        <AddNewQuestionTrigger onClick={() => setIsModalOpen(true)} />
        <PublishButton />
      </div>

      {isModalOpen && <AddNewQuestionModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default QuizQuestions;