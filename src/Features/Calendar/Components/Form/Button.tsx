const Button = ({ title, bg, txt, meth, type = "button", isLoading = false }: any) => {
  return (
    <>
      <button
        type={type}
        onClick={meth}
        disabled={isLoading}
        style={{ backgroundColor: bg, color: txt }}
        className="w-[220px] h-[44px] rounded-[8px] text-[16px] font-semibold mt-[24px] mb-[15px] border-[1px] border-[#525FE1] flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isLoading ? (
          <svg
            className="animate-spin w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          title
        )}
      </button>
    </>
  );
};

export default Button;