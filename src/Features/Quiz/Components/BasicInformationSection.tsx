import React, { useEffect } from 'react';
import { useQuiz } from '../Context/QuizContext'; 
import arrow from '../../../assets/icons/arrowList.svg';
import ii from '../../../assets/icons/i.svg';
import { useCreateQuiz } from '../Hooks/useCreateQuiz';

export const BasicInformationSection: React.FC = () => {
  const { QuizDataTime, setQuizDataTime } = useQuiz();
  const { GetAllClassesQuiz } = useCreateQuiz();

  const Subjects = localStorage.getItem("classesQuizData")? JSON.parse(localStorage.getItem("classesQuizData") || "[]") : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "Title") {
      setQuizDataTime((prev) => ({ ...prev, [name]: value }));
    } else if (name === "Class") {
      const selectedSubject = Subjects.find((s: any) => s.subjectName === value);
      if (selectedSubject) {
        localStorage.setItem("sessionId", selectedSubject.sessionId);
        setQuizDataTime((prev) => ({ ...prev, [name]: value }));
      }
    }
  };
  
  useEffect(()=>{
    GetAllClassesQuiz();
  } , [GetAllClassesQuiz]);

  const handlGrads = (grade:number)=>{
    switch(grade){
      case 0:
        return "Prep 1";
      case 1:
        return "Prep 2";
      case 2:
        return "Prep 3";
      case 3:
        return "Sec 1";
      case 4:
        return "Sec 2";
      case 5:
        return "Sec 3";
      case 6:
        return "Sec 4";
      default:
        return "";
    }
  }
  return (
    <div className="box-border flex flex-col items-start p-[28px] gap-[28px] w-full max-w-[1045px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-lg font-['Poppins',sans-serif]">
      
      {/* Header Section */}
      <div className="flex flex-row items-center gap-[11px] w-full">
        <img src={ii} className="w-[18px] h-[19px]" alt="info icon" />
        <h2 className="font-bold text-[17px] leading-[25px] text-[#2A2D34] m-0">
          Section 1: Basic Information
        </h2>
      </div>

      {/* Form Fields Section */}
      <div className="flex flex-col items-start gap-[22px] w-full">
        
        {/* Quiz Title Field */}
        <div className="flex flex-col items-start gap-[7px] w-full">
          <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
            Quiz Title
          </label>
          <input
            type="text"
            name="Title"
            value={QuizDataTime?.Title || ""}
            onChange={handleChange}
            placeholder="Stoichiometry Quiz"
            className="flex flex-row items-center p-[10px_15px_11px] w-full h-[44px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#2A2D34] placeholder:text-opacity-50 placeholder:text-[#747688]"
          />
          <span className="font-normal text-[11px] leading-[14px] text-[#747688]">
            Give your quiz a clear, descriptive name
          </span>
        </div>

        {/* Class and Subject Grid */}
        <div className="   w-full">
          
          {/* Select Class Field */}
          <div className="flex flex-col  gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Select Class
            </label>
            <div className="relative w-full">
              <select 
                name="Class"
                value={QuizDataTime?.Class || ""}
                onChange={handleChange}
                className="appearance-none flex flex-row items-center px-[15px] py-[11px] w-full h-[43px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#2A2D34] cursor-pointer"
              >
                <option value="" disabled>Select a class</option>
                {Subjects?.map((subject: any, index: number) => (
                  <option key={index} value={subject.subjectName} >
                    {subject.subjectName} , {handlGrads(subject.grade)}
                  </option>
                ))}
              </select>
              <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                <img src={arrow} className="w-[10px] h-[6px]" alt="arrow icon" />
              </div>
            </div>
          </div>

          {/* Subject Field (Static Display based on your design) */}
          {/* <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Subject
            </label>
            <div className="flex flex-row items-center px-[15px] py-[11px] gap-[7px] w-full h-[43px] bg-[#E0E2E7] bg-opacity-40 rounded-lg">
              <img src={chem} className="w-[13px] h-[13px]" alt="chemistry icon" />
              <span className="font-normal text-[15px] leading-[22px] text-[#747688]">
                Chemistry
              </span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default BasicInformationSection;

