import ButtomReserveSession from "./ButtomReserveSession"
import SelectTime from "./SelectTime"

function LeftTeacherSide() {
  return <>
    <section className="LeftTeacher w-[285px] h-[239px]">
        <div className="w-[285px] mb-6 flex justify-between items-start">
            <div className="w-[124px] flex justify-between items-start gap-2">
                <img
                src="../../../../../src/assets/icons/MoneyIcon.svg"
                alt="MoneyIcon"
                className="w-[22px] h-[22px]"
                />
                <div>
                    <p className="font-bold text-[#525FE1] text-[22px]">
                        Egp 100
                    </p>
                    <p className="font-medium text-[13px] text-[#2A2D34]">
                        per session
                    </p>
                </div>
            </div>
            <div className="heartImage">
                <img
                src="../../../../../src/assets/icons/heartIcon.svg"
                alt="heartIcon"
                className="w-[22px] h-[22px]"
                />
            </div>
        </div>
        
        <SelectTime/>

        <ButtomReserveSession/>

    </section>
  </>
}

export default LeftTeacherSide