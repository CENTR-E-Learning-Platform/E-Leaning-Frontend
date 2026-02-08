const MaxNoOfStudent = () => {
  return (
    <>
      <div className="flex flex-col w-[449px] ">
        <label htmlFor=" " className="text-[15px] font-[400] text-[#2A2D34]">
          Maximum number of students
        </label>
        <input
          type="number"
          onChange={(e: any) => {
            if (e.key === "-") e.preventDefault();
            if (e.target.value > 50) {
              e.target.value = 50;
            }
          }}
          placeholder="none"
          className="w-[244px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] me-[10px] [appearance:textfield]
  [&::-webkit-outer-spin-button]:appearance-none
  [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </>
  );
};

export default MaxNoOfStudent;
