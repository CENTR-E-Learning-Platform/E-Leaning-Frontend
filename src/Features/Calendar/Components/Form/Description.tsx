const Description = () => {
  return (
    <>
      <div className="flex flex-col w-[449px]">
        <label htmlFor=" " className="text-[16px] font-[400] text-[#2A2D34]">
          Description
        </label>
        <textarea
          placeholder="“What will students learn in this class?"
          className="w-[449px] h-[120px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none p-[8px]  text-[15px] font-[400] me-[10px] placeholder:text-[#6D7588]"
        ></textarea>
      </div>
    </>
  );
};

export default Description;
