import boldchat from "../../../../assets/icons/boldChat.svg";
import chat from "../../../../assets/icons/chat.svg";
const Bar = ({ click }: any) => {
  return (
    <>
      {!click && (
        <div className="w-[48px] h-[48px] bg-[#393D44] rounded-full flex items-center justify-center cursor-pointer">
          <img src={chat} className="w-[21px] h-[19px]" alt="" />
        </div>
      )}
      {click && (
        <div className="w-[400px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px] cursor-pointer ">
          <img
            src={boldchat}
            className="w-[21px] h-[19px]  me-[13px] ms-[10px] "
            alt=""
          />
          <h1 className="text-[16px] text-[#F9FBFC] me-[13px]">
            Live Chat
          </h1>
        </div>
      )}
    </>
  );
};
export default Bar;
