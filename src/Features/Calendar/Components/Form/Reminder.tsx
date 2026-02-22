const Reminder = ({change , val}:any) => {
  return (
    <>
      <div className="flex flex-col w-[449px]">
        <label htmlFor=" " className="text-[16px] font-[400] text-[#2A2D34]">
          Reminder
        </label>
        <select 
        name = "Reminder"
        onChange={change}
        value={val} 
        className="w-[244px] h-[42px] bg-[#FFFFFF] border-[2px] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] me-[10px]">
              <option value="01:00:00">1h before start</option>
              <option value="02:00:00">2h before start</option>
              <option value="03:00:00">3h before start</option>
        </select>
      </div>
    </>
  );
};

export default Reminder;
