import { useState } from "react";
type TabType = 'education' | 'work' | 'certifications';
import PlusWhite from "../../../../assets/icons/PlusWhite.svg"
const ResumeMe = () => {
    const [activeTab, setActiveTab] = useState<TabType>('education');
    
  return <>
    <section className="ResumeMe-section mb-12">
        <h3 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
            Resume
        </h3>

        <div className="w-[370px]">
            <div className="flex border-b w-[384px] border-gray-200 mb-6">
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

                <div
                className={`text-[16px] font-medium pb-4 px-2.5 pt-2.5 cursor-pointer border-b-4 transition-colors ${
                    activeTab === 'certifications'
                    ? 'text-gray-900 border-[#525FE1]'
                    : 'border-transparent'
                }`}
                onClick={() => setActiveTab('certifications')}
                >
                Certifications
                </div>
            </div>

            {activeTab === 'education' && (
            <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
                <div className="w-[481px]">
                    <p className="text-[#6D7588] mb-6 flex justify-center items-center font-semibold text-[18px]">
                        Adding education helps build trust
                    </p>

                    <button className="flex cursor-pointer m-auto h-[48px] bg-[#525FE1] gap-2 rounded-[8px] p-4 justify-center items-center">
                        <img src={PlusWhite} alt="PlusWhite" />
                        <p className="font-semibold text-[16px] text-[#F9FBFC]">
                            Add Education
                        </p>
                    </button>
                </div>
            </div>
            )}

            {activeTab === 'work' && (
                <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
                    <div className="w-[481px]">
                        <p className="text-[#6D7588] mb-6 flex justify-center items-center font-semibold text-[18px]">
                            Adding Work experience helps build trust
                        </p>

                        <button className="flex cursor-pointer m-auto h-[48px] bg-[#525FE1] gap-2 rounded-[8px] p-4 justify-center items-center">
                            <img src={PlusWhite} alt="PlusWhite" />
                            <p className="font-semibold text-[16px] text-[#F9FBFC]">
                                Add experience
                            </p>
                        </button>
                    </div>
                </div>

            )}

            {activeTab === 'certifications' && (
                <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
                    <div className="w-[481px]">
                        <p className="text-[#6D7588] mb-6 flex justify-center items-center font-semibold text-[18px]">
                            Adding Certifications helps build trust
                        </p>

                        <button className="flex cursor-pointer m-auto h-[48px] bg-[#525FE1] gap-2 rounded-[8px] p-4 justify-center items-center">
                            <img src={PlusWhite} alt="PlusWhite" />
                            <p className="font-semibold text-[16px] text-[#F9FBFC]">
                                Add Certifications
                            </p>
                        </button>
                    </div>
                </div>

            )}
        </div>

    </section>
  </>
}

export default ResumeMe