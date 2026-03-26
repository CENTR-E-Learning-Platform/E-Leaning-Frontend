const Grad = ({ title , change  ,checked}: any) => {
  return (
    <>
      <input
        onClick={change}
        type="button"
        value={title}
        className={`w-[143px] ${checked ? "bg-[#a79d9d]" : ""} h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none p-[8px]  text-[15px] font-medium cursor-pointer`}
      />
    </>
  );
};

export default Grad;
