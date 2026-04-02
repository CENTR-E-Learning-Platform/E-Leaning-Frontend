import ButtomReserveSession from "./ButtomReserveSession"
import SelectTime from "./SelectTime"


function LeftTeacherSide() {
  return <>
    <section className="LeftTeacher w-[300px] h-[266px]">
        <div className="w-[300px] mb-7 flex justify-between items-start">
            <div className="w-[131px] flex justify-between items-start gap-2">
                <img
                src="../../../../../src/assets/icons/MoneyIcon.svg"
                alt="MoneyIcon"
                />
                <div>
                    <p className="font-bold text-[#525FE1] text-[24px]">
                        Egp 100
                    </p>
                    <p className="font-medium text-[14px] text-[#2A2D34]">
                        per session
                    </p>
                </div>
            </div>
            <div className="heartImage">
                <img
                src="../../../../../src/assets/icons/heartIcon.svg"
                alt="heartIcon"
                />
            </div>
        </div>
        
        <SelectTime/>

        <ButtomReserveSession/>

    </section>
  </>
}

export default LeftTeacherSide