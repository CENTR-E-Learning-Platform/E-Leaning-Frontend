const Price = ({change , val , blure}:any) => {
  return (
    <>
      <div className="flex flex-col w-[449px] ">
        <label htmlFor=" " className="text-[15px] font-[400] text-[#2A2D34]">
          Price
        </label>
        <input
        name="Price"
          type="number"
          onChange={change}
          value={val}
          onBlur={blure}
          placeholder="none"
          className="w-[244px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] me-[10px] [appearance:textfield]
  [&::-webkit-outer-spin-button]:appearance-none
  [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </>
  );
};

export default Price;