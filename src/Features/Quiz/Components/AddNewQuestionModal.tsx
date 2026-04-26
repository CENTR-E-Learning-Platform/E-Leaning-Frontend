import React, { useState } from 'react';
import { useQuiz } from '../Context/QuizContext';
import circlePlus from '../../../assets/icons/circlePlus.svg';

interface AddNewQuestionModalProps {
  onClose: () => void;
}

export const AddNewQuestionModal: React.FC<AddNewQuestionModalProps> = ({ onClose }) => {
  const { QuizDataTime, setQuizDataTime } = useQuiz();
  
  const [selectedType, setSelectedType] = useState<string>('multiplechoice');
  const [points, setPoints] = useState<number>(5);
  const [questionText, setQuestionText] = useState<string>('');
  
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState<string[]>(['Option 1', 'Option 2', 'Option 3', 'Option 4']);

  const trueFalseOptions = ['True', 'False'];
  const isTrueFalse = selectedType === 'truefalse';
  const currentOptions = isTrueFalse ? trueFalseOptions : multipleChoiceOptions;

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value );
    setSelectedOptionIndex(0);
  };

  const handleAddQuestion = () => {
    if (!questionText.trim()) {
      alert('Please enter a question text.');
      return;
    }

    const newOptions = currentOptions.map((opt, index) => ({
      optionText: opt,
      isCorrect: index === selectedOptionIndex,
      sequenceOrder: index + 1
    }));

    const currentQuestions = QuizDataTime?.Questions || [];
    const newQuestion = {
      questionTitle: questionText,
      questionType: selectedType,
      options: newOptions,
      points: Number(points) || 0,
      sequenceOrder: currentQuestions.length + 1
    };

    setQuizDataTime((prev) => ({
      ...prev,
      Title: prev?.Title || "",
      Description: prev?.Description || "",
      Date: prev?.Date || "",
      Time: prev?.Time || "",
      Duration: prev?.Duration || 0,
      Attemptes: prev?.Attemptes || 1,
      Questions: [...currentQuestions, newQuestion]
    }));

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#181C20]/40 bg-opacity-[0.45] backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-10 flex flex-col w-full max-w-[638px] max-h-[90vh] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden font-['Poppins',sans-serif]">
        
        <div className="flex-none box-border flex flex-row justify-between items-center px-[30px] py-[22px] w-full border-b border-[#F1F5F9] bg-white">
          <div className="flex flex-row items-center gap-[7px]">
            <img src={circlePlus} className="w-[20px] h-[20px]" alt="" />
            <h2 className="font-bold text-[19px] leading-[26px] text-[#181C20] m-0">
              Add New Question
            </h2>
          </div>
          <button onClick={onClose} className="flex justify-center items-center p-0 w-[13px] h-[13px] bg-transparent border-none cursor-pointer">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col items-start p-[30px] gap-[22px] w-full bg-white">
          <div className="flex flex-row gap-[22px] w-full">
            <div className="flex flex-col items-start gap-[7px] flex-1">
              <label className="font-bold text-[13px] leading-[18px] text-[#334155]">
                Question Type
              </label>
              <div className="relative w-full">
                <select 
                  className="appearance-none flex flex-row items-center px-[15px] py-[11px] w-full bg-[#F8FAFC] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#334155] cursor-pointer"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option value="multiplechoice">Multiple Choice</option>
                  <option value="truefalse">True & False</option>
                </select>
                <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="11" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[7px] flex-1">
              <label className="font-bold text-[13px] leading-[18px] text-[#334155]">
                Points
              </label>
              <input
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className="flex flex-row justify-center items-start px-[15px] py-[11px] w-full bg-[#F8FAFC] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#334155]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-bold text-[13px] leading-[18px] text-[#334155]">
              Question Text
            </label>
            <textarea
              placeholder="Enter your question here..."
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="flex flex-row items-start px-[15px] py-[11px] pb-[54px] w-full min-h-[86px] bg-[#F8FAFC] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#6B7280] resize-none"
            />
          </div>

          <div className="flex flex-col items-start gap-[14px] w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <span className="font-bold text-[11px] leading-[15px] tracking-[1.2px] uppercase text-[#334155]">
                {isTrueFalse ? 'TRUE & FALSE OPTIONS' : 'MULTIPLE CHOICE OPTIONS'}
              </span>
              <span className="font-bold text-[11px] leading-[15px] text-[#525FE1]">
                Correct?
              </span>
            </div>

            <div className="flex flex-col items-start gap-[11px] w-full">
              {currentOptions.map((option, index) => (
                <div key={index} className="flex flex-row items-center gap-[11px] w-full">
                  <input
                    type="text"
                    value={option}
                    readOnly={isTrueFalse}
                    onChange={(e) => {
                      if (!isTrueFalse) {
                        const newOptions = [...multipleChoiceOptions];
                        newOptions[index] = e.target.value;
                        setMultipleChoiceOptions(newOptions);
                      }
                    }}
                    className="flex flex-row items-center px-[15px] py-[10px] flex-1 bg-[#F8FAFC] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#6B7280]"
                  />
                  <button
                    onClick={() => setSelectedOptionIndex(index)}
                    className={`box-border w-[19px] h-[19px] rounded-full flex items-center justify-center cursor-pointer ${
                      selectedOptionIndex === index
                        ? 'bg-[#525FE1] border-none'
                        : 'bg-white border border-[#CBD5E1]'
                    }`}
                  >
                    {selectedOptionIndex === index && (
                      <div className="w-[8px] h-[8px] bg-white rounded-full" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {!isTrueFalse && (
              <button 
                onClick={() => setMultipleChoiceOptions([...multipleChoiceOptions, `Option ${multipleChoiceOptions.length + 1}`])}
                className="flex flex-row items-center gap-[5px] bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity mt-[7px]"
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1V9M1 5H9" stroke="#525FE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-bold text-[13px] leading-[18px] text-[#525FE1]">
                  Add Another Option
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="flex-none box-border flex flex-row justify-end items-center px-[30px] py-[22px] gap-[14px] w-full bg-[#F8FAFC] border-t border-[#F1F5F9]">
          <button onClick={onClose} className="flex flex-col justify-center items-center px-[22px] py-[7px] bg-transparent border-none rounded-lg font-bold text-[15px] leading-[22px] text-[#64748B] cursor-pointer hover:bg-[#e2e8f0] transition-colors">
            Cancel
          </button>
          <button 
            onClick={handleAddQuestion}
            className="relative flex flex-col justify-center items-center px-[30px] py-[7px] bg-[#525FE1] rounded-lg font-bold text-[15px] leading-[22px] text-white cursor-pointer hover:bg-[#4350c9] transition-colors shadow-[0px_4px_6px_-1px_rgba(0,64,223,0.2),0px_2px_4px_-2px_rgba(0,64,223,0.2)]"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewQuestionModal;