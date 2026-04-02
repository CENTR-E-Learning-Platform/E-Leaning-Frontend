const Button = ({ title, bg, txt, meth, type = "button" }: any) => {
  return (
    <>
      <button
        type={type}
        onClick={meth}
        style={{ backgroundColor: bg, color: txt }}
        className="w-[220px] h-[44px] rounded-[8px] text-[16px] font-semibold mt-[24px] mb-[15px] cursor-pointer border-[1px] border-[#525FE1] flex justify-center items-center"
      >
        {title}
      </button>
    </>
  );
};

export default Button;