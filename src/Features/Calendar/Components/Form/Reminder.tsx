const Reminder = () => {
  return (
    <>
      <div className="flex flex-col w-[449px]">
        <label htmlFor=" " className="text-[16px] font-[400] text-[#2A2D34]">
          Reminder
        </label>
        <select className="w-[244px] h-[42px] bg-[#FFFFFF] border-[2px] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] me-[10px]">
          <option className="">1h before start</option>
          <option>2h before start</option>
          <option>3h before start</option>
        </select>
      </div>
    </>
  );
};

export default Reminder;
