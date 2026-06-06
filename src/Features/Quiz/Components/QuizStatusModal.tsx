import React from 'react';

interface QuizStatusModalProps {
  status: 'success' | 'error';
  message?: string;
  onClose: () => void;
}

const QuizStatusModal: React.FC<QuizStatusModalProps> = ({ status, message, onClose }) => {
  const isSuccess = status === 'success';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#181C20]/40 bg-opacity-[0.45] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex flex-col items-center p-[36px] w-[486px] h-auto bg-white rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif]">
        <div className={`mb-[22px] flex shrink-0 justify-center items-center w-[72px] h-[72px] rounded-full shadow-lg ${isSuccess ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-400 to-red-600'}`}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isSuccess ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </div>
        <div className="mb-[11px] flex flex-col items-center">
          <h3 className="m-0 font-extrabold text-[27px] leading-[32px] text-center text-[#2A2D34]">
            {isSuccess ? 'Success!' : 'Error!'}
          </h3>
        </div>
        <div className="mb-[29px] flex flex-col items-center px-[35px] w-full text-center">
          <p className="m-0 font-normal text-[15px] leading-[25px] text-[#434656]">
            {message || (isSuccess ? 'Quiz created successfully!' : 'Failed to create quiz. Please try again.')}
          </p>
        </div>
        <div className="flex flex-row justify-center w-full h-[54px]">
          <button 
            onClick={onClose}
            className="relative flex flex-col justify-center items-center w-[197px] h-full bg-[#525FE1] rounded-lg cursor-pointer hover:bg-[#4350c9] transition-colors shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] border-none"
          >
            <span className="font-bold text-[14px] leading-[22px] text-center text-white z-10">
              {isSuccess ? 'Continue' : 'Close'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStatusModal;
