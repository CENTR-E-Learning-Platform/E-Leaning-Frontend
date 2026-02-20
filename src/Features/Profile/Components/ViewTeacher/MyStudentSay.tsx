
import SaysStudent from "../../../../assets/images/SaysStudent.png"
const MyStudentSay = () => {
  return <>
    <section className="MyStudentSay-section mb-12">
        <h3 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
            What my students say
        </h3>

        <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
            <div className="w-[481px] mb-[30px] flex justify-center items-center">
                <img className="w-[146px] h-[110px]" src={SaysStudent} alt="SaysStudent" />
            </div>
            <div className="w-[481px]">
                <p className="text-[#6D7588] flex justify-center items-center font-semibold text-[18px]">
                    No reviews yet.
                </p>
            </div>
        </div>

    </section>
  </>
}

export default MyStudentSay