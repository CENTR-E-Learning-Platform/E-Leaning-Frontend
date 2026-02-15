import { useState } from "react";

import DiplomaVerified from "../../../../assets/icons/DiplomaVerified.svg"
type TabType = 'education' | 'work';

const TeacherResume = () => {
    const [activeTab, setActiveTab] = useState<TabType>('education');

  return<>
    <section className="w-[500px] Resume-section">

        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          Resume
        </h2>

        <div className="w-[370px]">
            <div className="flex border-b w-[370px] border-gray-200 mb-6">
                <div
                className={`text-[16px] font-medium pb-4 px-2.5 pt-2.5 cursor-pointer border-b-4 transition-colors ${
                    activeTab === 'education'
                    ? 'text-gray-900 border-[#525FE1]'
                    : 'border-transparent'
                }`}
                onClick={() => setActiveTab('education')}
                >
                Education
                </div>
                <div
                className={`text-[16px] font-medium pb-4 px-2.5 pt-2.5 cursor-pointer border-b-4 transition-colors ${
                    activeTab === 'work'
                    ? 'text-gray-900 border-[#525FE1]'
                    : 'border-transparent'
                }`}
                onClick={() => setActiveTab('work')}
                >
                Work experience
                </div>
            </div>

            {activeTab === 'education' && (
                <div className="flex gap-8 items-start">
                    <div className="text-[16px] text-gray-400 font-medium whitespace-nowrap">
                        2004 - 2008
                    </div>
                    <div className="flex-1 w-[242px]">
                        <div className="text-[16px] text-[#2A2D34] font-medium mb-2">
                            University
                        </div>
                        <div className="text-[16px] text-[#2A2D34] font-normal mb-2">
                            BA in mechanical engineering
                        </div>
                        <div className="flex items-center gap-2.5">
                            <img src={DiplomaVerified} alt="DiplomaVerified" />
                            <div className="text-[14px] text-[#0DA26C] font-medium">
                                Diploma verified
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'work' && (
                <div className="flex gap-8 items-start">
                    <div className="text-[16px] text-gray-400 font-medium whitespace-nowrap">
                        2010 - 2015
                    </div>
                    <div className="flex-1 w-[242px]">
                        <div className="text-[16px] text-[#2A2D34] font-medium mb-2">
                            Tech Company
                        </div>
                        <div className="text-[16px] text-[#2A2D34] font-normal mb-2">
                            Senior Mechanical Engineer
                        </div>
                        <div className="flex items-center gap-2.5">
                            <img src={DiplomaVerified} alt="DiplomaVerified" />
                            <div className="text-[14px] text-[#0DA26C] font-medium">
                                Employment verified
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>



    </section>
  
  </>
}

export default TeacherResume


