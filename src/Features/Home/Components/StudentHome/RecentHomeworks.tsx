const RecentHomeworks = () => {
  return (
    <>
      <div className="flex flex-col min-w-[400px] items-start gap-7 px-6 py-[30px] w-full bg-white rounded-lg border border-solid border-[#e8eaed]">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-[#2a2d34] text-2xl m-0">
            Recent Homeworks
          </h2>
          <button className="bg-transparent border-none cursor-pointer font-medium text-[#525fe1] text-lg">
            See all
          </button>
        </div>
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-end justify-end gap-3 w-full">
            <div className="flex items-center gap-4 w-full">
              <div className="relative w-[60px] h-[60px] bg-[#daf3ff] rounded-xl flex items-center justify-center">
                <div className="w-[27px] h-[42px] bg-blue-300" />{" "}
              </div>
              <div className="flex flex-col w-[229px] items-start gap-3">
                <p className="font-semibold text-[#2a2d34] text-lg leading-[13px] m-0">
                  The mole - Assignment 3
                </p>
                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-2 bg-[#daf3ff] rounded-[18px]">
                  <span className="font-semibold text-[#0182c2] text-base leading-[13px]">
                    Chemistry
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2 w-[226px]">
              <div className="w-2.5 h-2.5 bg-[#cc3363] rounded-full" />
              <span className="font-normal text-[#cc3363] text-base leading-3">
                Submit before: mon 15 oct
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-[#e8eaed]" />
          <div className="flex items-center justify-between w-full">
            <button className="bg-transparent cursor-pointer border-2 border-solid border-[#525fe1] items-center justify-center px-4 py-3.5 rounded-lg font-medium text-[#525fe1] text-lg">
              View Details
            </button>
            <button className="cursor-pointer border-none bg-[#525fe1] items-center justify-center px-4 py-3.5 rounded-lg font-semibold text-[#f9fbfc] text-lg">
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentHomeworks;
