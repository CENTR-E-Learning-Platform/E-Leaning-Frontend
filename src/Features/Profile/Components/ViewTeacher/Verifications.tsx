
import identity from "../../../../../src/assets/icons/identity.svg";
import Professional from "../../../../../src/assets/icons/Professional.svg";
import Educational from "../../../../../src/assets/icons/Educational.svg";

const Verifications = () => {
  return <>
    <section className="Verifications mb-11">
        <h3 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
            Verifications
        </h3>
        
        <div className="p-4 border-2 w-[541px] bg-white border-[#E8EAED] mb-3 rounded-[4px]">
            <div className="flex justify-center items-center">
                <div className="DescribtionIdentityVerification w-[363px]">
                    <div className={`flex justify-between items-center gap-2.5 w-[154px]`}>
                        <img src={identity} alt="identity" />
                        <p className={`font-medium text-[16px] text-[#525FE1]`}>
                            Identity verified
                        </p>
                    </div>
                
                    <p className="font-medium text-[14px] text-[#5A6272]">
                        Build trust and secure your account by verifying your ID.
                    </p>
                </div>
                <button className="text-[#525FE1] cursor-pointer flex justify-center items-center rounded-[8px] w-[120px] h-[43px] border-2 border-[#525FE1] text-[16px] p-4">
                    Verify now
                </button>
            </div>
        </div>

        <div className="p-4 border-2 w-[541px] bg-white border-[#E8EAED] mb-3 rounded-[4px]">
            <div className="flex justify-center items-center">
                <div className="DescribtionProfessionalVerification w-[363px]">
                    <div className={`flex justify-between items-center gap-2.5 w-[197px]`}>
                        <img src={Professional} alt="ProfessionalTeacher" />
                        <p className={`font-medium text-[16px] text-[#CC3363]`}>
                            Professional Teacher
                        </p>
                    </div>
                
                    <p className="font-medium text-[14px] text-[#5A6272]">
                        Stand out as a certified expert by adding your teaching license.
                    </p>
                </div>
                <button className="text-[#525FE1] cursor-pointer flex justify-center items-center rounded-[8px] w-[120px] h-[43px] border-2 border-[#525FE1] text-[16px] p-4">
                    Verify now
                </button>
            </div>
        </div>

        <div className="p-4 border-2 w-[541px] bg-white border-[#E8EAED] mb-3 rounded-[4px]">
            <div className="flex justify-center items-center">
                <div className="DescribtionEducationalVerification w-[363px]">
                    <div className={`flex justify-between items-center gap-2.5 w-[231px]`}>
                        <img src={Educational} alt="EducationalTeacher" />
                        <p className={`font-medium text-[16px] text-[#34D399]`}>
                            Educational qualification
                        </p>
                    </div>
                
                    <p className="font-medium text-[14px] text-[#5A6272]">
                        Showcase your academic background to confirm your expertise.
                    </p>
                </div>
                <button className="text-[#525FE1] cursor-pointer flex justify-center items-center rounded-[8px] w-[120px] h-[43px] border-2 border-[#525FE1] text-[16px] p-4">
                    Verify now
                </button>
            </div>
        </div>

        
    </section>
  </>
}

export default Verifications