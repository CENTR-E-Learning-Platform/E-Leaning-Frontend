import React, { useContext, useEffect, useState } from "react";
import { useGetChatConversation } from "../../Hooks/useGetChatConversation";
import { useConvertDate } from "../../Hooks/useConvertDate";
import type { ContactProps, Conversation } from "../../Types/itemContact";
import { useGetChatMessages } from "../../Hooks/useGetChatMessages";
import { useChat } from "../../Contexts/ShareDataMessages";
import { ShareDataContactItems } from "../../Contexts/ShareDataContactItems";

const ContactItem: React.FC<ContactProps> = ({
  name,
  message,
  time,
  avatarUrl,
  isActive,
  isOnline,
  hasUnread,
}) => {
  return (
    <div
      className={`flex flex-row items-center mb-2 p-[14.4px] gap-[15.2px] w-[329.6px] h-[72px] rounded-[14.4px] transition-all ${
        isActive
          ? "bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex flex-col items-start p-0 isolate w-[45.6px] h-[43.2px]">
        <div
          className={`w-[45.6px] h-[43.2px] rounded-full overflow-hidden bg-gray-200 ${
            isActive ? "border-[1.8px] border-[#525FE1]" : ""
          }`}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {isOnline && (
          <div className="absolute w-[11.4px] h-[10.8px] right-0 bottom-0 bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
        )}
      </div>

      <div className="flex flex-col items-start p-0 gap-[3.6px] flex-grow w-[213.7px] h-[43.2px]">
        <div className="flex flex-row justify-between items-center p-0 w-full h-[21.6px] self-stretch">
          <h3
            className={`font-['Poppins'] text-[15.2px] leading-[21.6px] flex-1 truncate ${
              isActive
                ? "font-bold text-[#2A2D34]"
                : "font-semibold text-[#2A2D34]"
            }`}
          >
            {name}
          </h3>
          <span
            className={`font-['Poppins'] text-[9.5px] leading-[13.5px] flex items-center ${
              isActive
                ? "font-semibold text-[#525FE1]"
                : "font-light text-[#434656]"
            }`}
          >
            {time}
          </span>
        </div>
        <div className="flex flex-col items-start p-0 w-full h-[18px] self-stretch">
          <p
            className={`font-['Poppins'] text-[13.3px] leading-[18px] flex items-center truncate w-full ${
              isActive
                ? "font-medium text-[#525FE1]"
                : "font-normal text-[#434656]"
            }`}
          >
            {message}
          </p>
        </div>
      </div>

      {hasUnread && (
        <div className="w-[9.5px] h-[9px] bg-[#525FE1] rounded-full flex-none" />
      )}
    </div>
  );
};

const ContactList: React.FC = () => {
  const { setDataContactItem, activeMessage, isTeacher } = useContext(
    ShareDataContactItems,
  );
  const { data } = useGetChatConversation();
  console.log(data);
  useEffect(() => {
    if (data?.data) {
      setDataContactItem(data?.data);
    }
  }, [data]);

  const formatTime = useConvertDate();
  const [activeId, setActiveId] = useState<string | null>(null);
  const {
    setChatData,
    conversationId,
    setConversationId,
    setOtherUserId,
    page,
    setPage,
    setHasMore,
    setSelectedConversation,
    signalR,
  } = useChat();
  const { mutate } = useGetChatMessages();

  useEffect(() => {
    if (!conversationId) return;
    mutate(
      {
        conversationId,
        pageNumber: page,
        pageSize: 50,
      },
      {
        onSuccess: (res) => {
          if (res.data.length < 50) {
            setHasMore(false);
          }
          if (page === 1) {
            setChatData(res.data);
          } else {
            setChatData((prev: any[]) => [...res.data, ...(prev || [])]);
          }
        },
      },
    );
  }, [conversationId, page]);

  const getConversationId = (id: string, otherUserId: string) => {
    if (activeId === id) return;
    setActiveId(id);
    setConversationId(id);

    const token = localStorage.getItem("token");

    if (token) {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));

      console.log("decoded", decoded);

      const userId =
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];

      localStorage.setItem("currentUserId", userId);
    }

    setOtherUserId(otherUserId);
    setPage(1);
    setHasMore(true);
  };

  return (
    // <div className="flex flex-col items-start py-[14.4px] pl-[14.4px] gap-[7.2px] w-[360px] h-[744.3px] overflow-y-auto scroll-smooth">
    //   {data?.data
    //     ? data?.data.map((conversation: Conversation) => {
    //         return (
    //           <div
    //             key={conversation.id}
    //             onClick={() => {
    //               getConversationId(conversation.id, conversation.otherUserId);
    //               setSelectedConversation(conversation);
    //             }}
    //             className=""
    //           >
    //             <ContactItem
    //               key={conversation.id}
    //               isActive={activeId === conversation.id}
    //               isOnline={conversation.isOnline}
    //               hasUnread={conversation.unreadCount}
    //               name={conversation.otherUserName}
    //               message={
    //                 signalR.typingUser ? "typing..." : conversation.lastMessage
    //               }
    //               time={formatTime(conversation.lastMessageAt)}
    //               avatarUrl={
    //                 conversation.otherUserPicture
    //                   ? conversation.otherUserPicture
    //                   : `https://api.dicebear.com/7.x/avataaars/svg?seed=${conversation.otherUserName}`
    //               }
    //             />
    //           </div>
    //         );
    //       })
    //     : ";,fc,"}
    // </div>

    <div className="flex flex-col items-start py-[14.4px] pl-[14.4px] gap-[7.2px] w-[360px] h-[744.3px] overflow-y-auto scroll-smooth">
      {activeMessage === (isTeacher ? "Teachers" : "Students") ? (
        data?.data?.length > 0 ? (
          data?.data?.map((conversation: Conversation) => {
            return (
              <div
                key={conversation.id}
                onClick={() => {
                  getConversationId(conversation.id, conversation.otherUserId);
                  setSelectedConversation(conversation);
                }}
              >
                <ContactItem
                  isActive={activeId === conversation.id}
                  isOnline={conversation.isOnline}
                  hasUnread={conversation.unreadCount}
                  name={conversation.otherUserName}
                  message={
                    signalR.typingUser ? "typing..." : conversation.lastMessage
                  }
                  time={formatTime(conversation.lastMessageAt)}
                  avatarUrl={
                    conversation.otherUserPicture
                      ? conversation.otherUserPicture
                      : `https://api.dicebear.com/7.x/avataaars/svg?seed=${conversation.otherUserName}`
                  }
                />
              </div>
            );
          })
        ) : (
          "No Conversation"
        )
      ) : (
        data?.data?.length > 0 ? (
          data?.data?.map((conversation: Conversation) => {
            return (
              <div
                key={conversation.id}
                onClick={() => {
                  getConversationId(conversation.id, conversation.otherUserId);
                  setSelectedConversation(conversation);
                }}
              >
                <ContactItem
                  isActive={activeId === conversation.id}
                  isOnline={conversation.isOnline}
                  hasUnread={conversation.unreadCount}
                  name={conversation.otherUserName}
                  message={
                    signalR.typingUser ? "typing..." : conversation.lastMessage
                  }
                  time={formatTime(conversation.lastMessageAt)}
                  avatarUrl={
                    conversation.otherUserPicture
                      ? conversation.otherUserPicture
                      : `https://api.dicebear.com/7.x/avataaars/svg?seed=${conversation.otherUserName}`
                  }
                />
              </div>
            );
          })
        ) : (
          "No Conversation"
        )
      )
    }
    </div>
  );
};

export default ContactList;
