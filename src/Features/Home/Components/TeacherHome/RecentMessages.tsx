import type { MessageItem } from "../../Types/types";

const RecentMessages = () => {
  

  const messages: MessageItem[] = [
    {
      id: 1,
      name: "Mr. Ali hosny",
      lastMessage: "Hello let me know if you want any h...",
      avatarUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
      unreadCount: 1,
    },
  ];
  
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[453px] min-w-[453px] bg-white border border-[#E8EAED] rounded-lg shadow-[0px_4px_24px_rgba(0,0,0,0.04)] p-[30px_24px] flex flex-col gap-7">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-['Poppins'] font-bold text-[22px] leading-[17px] text-[#2A2D34] m-0">
              Recent messages
            </h2>
            <button className="bg-transparent border-none cursor-pointer font-['Poppins'] font-medium text-[16px] leading-[13px] text-[#525FE1] px-4">
              See all
            </button>
          </div>

          <div className="w-full h-[44px] bg-[#EEF0FF] rounded-full p-1 flex items-center">
            <button className="flex-1 h-9 bg-white rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center border-none cursor-pointer">
              <span className="font-['Poppins'] font-bold text-[16px] text-[#525FE1]">
                Teachers
              </span>
            </button>

            <button className="flex-1 h-9 rounded-full flex items-center justify-center border-none bg-transparent cursor-pointer">
              <span className="font-['Poppins'] font-bold text-[16px] text-[#525FE1]">
                Groups
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-5 w-full">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex flex-col items-start gap-5 w-full"
              >
                <div className="flex items-center gap-2 w-full h-[50px]">
                  <div className="relative w-[50px] h-[50px] flex-shrink-0">
                    <img
                      src={msg.avatarUrl}
                      alt={msg.name}
                      className="w-full h-full rounded-full object-cover border border-[#D1D5DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1 flex-1 overflow-hidden">
                    <h3 className="font-['Poppins'] font-semibold text-[16px] leading-[13px] text-[#2A2D34] m-0 truncate">
                      {msg.name}
                    </h3>
                    <p className="font-['Poppins'] font-medium text-[14px] leading-[13px] text-[#6D7588] m-0 truncate">
                      {msg.lastMessage}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-[#525FE1] rounded-full">
                    <span className="font-['Poppins'] font-medium text-[16px] leading-[13px] text-[#F9FBFC]">
                      {msg.unreadCount}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-[#E8EAED] last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentMessages;
