import { useState } from 'react';
import HeaderSection from '../Components/HeaderSection';
import AddNewQuestionModal from '../Components/AddNewQuestionModal';
import { Outlet } from 'react-router-dom';
import { useQuiz } from '../Context/QuizContext';
import PublishQuizModal from '../Components/PublishQuizModal';
import { useCreateQuiz } from '../Hooks/useCreateQuiz';
import QuizStatusModal from '../Components/QuizStatusModal';

const CreateNewQuiz = () => {
  const { createNewQuiz } = useCreateQuiz();
  const { isModalOpen, setIsModalOpen, setIsPublishModel, isPublishModel } = useQuiz();
  const sessionId = localStorage.getItem("sessionId")?.toString();

  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handlePublish = async () => {
    try {
      await createNewQuiz(sessionId as string);
      setIsPublishModel(false);
      setStatus('success');
    } catch (error) {
      setIsPublishModel(false);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[24px] mt-[50px] mb-[50px]">
        <HeaderSection onOpenModal={() => setIsModalOpen(true)} />
        <Outlet />
      </div>
      
      {isPublishModel && <PublishQuizModal onCancel={() => setIsPublishModel(false)} onPublish={handlePublish} />}
      
      {isModalOpen && <AddNewQuestionModal onClose={() => setIsModalOpen(false)} />}

      {status && <QuizStatusModal status={status} onClose={() => setStatus(null)} />}
    </>
  );
};

export default CreateNewQuiz;