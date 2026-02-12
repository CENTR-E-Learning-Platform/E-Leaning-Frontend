const Button = ({ title, bg, txt,meth }: any) => {
  return (
    <>
      <input
        type="submit"
        onClick={()=>meth}
        value={title}
        className={`w-[220px] h-[44px] rounded-[8px] bg-[${bg}] text-[${txt}] text-[16px] font-semibold mt-[24px] mb-[15px] cursor-pointer border-[1px] border-[#525FE1]`}
      />
    </>
  );
};

export default Button;
