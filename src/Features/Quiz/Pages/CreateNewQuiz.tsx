import HeaderSection from '../Components/HeaderSection';
import AddNewQuestionModal from '../Components/AddNewQuestionModal';
import { Outlet } from 'react-router-dom';
import { useQuiz } from '../Context/QuizContext';
import PublishQuizModal from '../Components/PublishQuizModal';
import { useCreateQuiz } from '../Hooks/useCreateQuiz';
const CreateNewQuiz = () => {
  const { createNewQuiz } = useCreateQuiz();
  const { isModalOpen, setIsModalOpen, setIsPublishModel, isPublishModel } = useQuiz();
  const sessionId = localStorage.getItem("sessionId")?.toString();
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[24px] mt-[50px] mb-[50px]">
        <HeaderSection onOpenModal={() => setIsModalOpen(true)} />
        <Outlet />
      </div>
      
      {isPublishModel && <PublishQuizModal onCancel={() => setIsPublishModel(false)} onPublish={()=> createNewQuiz(sessionId as string)} />}
      
      {isModalOpen && <AddNewQuestionModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CreateNewQuiz;