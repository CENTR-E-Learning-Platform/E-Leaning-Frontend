import React, { useContext, useEffect, useState } from "react";
import { useGetChatConversation } from "../../Hooks/useGetChatConversation";
import { useConvertDate } from "../../Hooks/useConvertDate";
import type { ContactProps, Conversation, ConversationGroup } from "../../Types/itemContact";
import { useGetChatMessages } from "../../Hooks/useGetChatMessages";
import { useGetChatGroupMessages } from "../../Hooks/useGetChatGroupMessages";
import { useChat } from "../../Contexts/ShareDataMessages";
import { ShareDataContactItems } from "../../Contexts/ShareDataContactItems";
import { useGetChatMyGroups } from "../../Hooks/useGetChatMyGroups";
import DefaultAvatar from "./DefaultAvatar";

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
      className={`flex flex-row items-center mb-2 p-[14.4px] gap-[15.2px] w-[329.6px] h-[72px] rounded-[14.4px] transition-all ${isActive
        ? "bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)]"
        : "bg-transparent"
        }`}
    >
      <div className="relative flex flex-col items-start p-0 isolate w-[45.6px] h-[43.2px]">
        <div
          className={`w-[45.6px] h-[43.2px] rounded-full overflow-hidden bg-gray-200 ${isActive ? "border-[1.8px] border-[#525FE1]" : ""
            }`}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <DefaultAvatar name={name} className="w-full h-full text-[16px]" />
          )}
        </div>
        {isOnline && (
          <div className="absolute w-[11.4px] h-[10.8px] right-0 bottom-0 bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
        )}
      </div>

      <div className="flex flex-col items-start p-0 gap-[3.6px] flex-grow w-[213.7px] h-[43.2px] min-w-0">
        <div className="flex flex-row justify-between items-center p-0 w-full h-[21.6px] self-stretch gap-[8px]">
          <h3
            className={`font-['Poppins'] text-[15.2px] leading-[21.6px] flex-1 min-w-0 truncate ${isActive
              ? "font-bold text-[#2A2D34]"
              : "font-semibold text-[#2A2D34]"
              }`}
          >
            {name}
          </h3>
          <span
            className={`font-['Poppins'] text-[9.5px] leading-[13.5px] flex-none items-center ${isActive
              ? "font-semibold text-[#525FE1]"
              : "font-light text-[#434656]"
              }`}
          >
            {time}
          </span>
        </div>
        <div className="flex flex-col items-start p-0 w-full h-[18px] self-stretch">
          <p
            className={`font-['Poppins'] text-[13.3px] leading-[18px] flex items-center truncate w-full ${isActive
              ? "font-medium text-[#525FE1]"
              : "font-normal text-[#434656]"
              }`}
          >
            {message}
          </p>
        </div>
      </div>

      {hasUnread && hasUnread > 0 ? (
        <div className="min-w-[18px] h-[18px] px-[4px] bg-[#525FE1] rounded-full flex-none flex items-center justify-center">
          <span className="font-['Poppins'] font-semibold text-[10px] leading-none text-white">
            {hasUnread > 99 ? "99+" : hasUnread}
          </span>
        </div>
      ) : null}
    </div>
  );
};

const ContactList: React.FC = () => {
  const { activeMessage, isTeacher } = useContext(
    ShareDataContactItems,
  );
  const { data: dataGetChatConversation } = useGetChatConversation();
  const { data: dataGetChatMyGroups } = useGetChatMyGroups();

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
  const { mutate: mutateGroup } = useGetChatGroupMessages();

  useEffect(() => {
    if (!conversationId) return;

    const isGroupChat = activeMessage !== (isTeacher ? "Teachers" : "Students");

    if (isGroupChat) {
      mutateGroup(
        {
          groupId: conversationId,
          pageNumber: page,
          pageSize: 50,
        },
        {
          onSuccess: (res) => {
            const messages = Array.isArray(res.data) ? res.data : (res.data?.data || []);
            if (messages.length < 50) {
              setHasMore(false);
            }
            if (page === 1) {
              setChatData(messages);
            } else {
              setChatData((prev: any[]) => [...messages, ...(prev || [])]);
            }
          },
        }
      );
    } else {
      mutate(
        {
          conversationId,
          pageNumber: page,
          pageSize: 50,
        },
        {
          onSuccess: (res) => {
            const messages = Array.isArray(res.data) ? res.data : (res.data?.data || []);
            if (messages.length < 50) {
              setHasMore(false);
            }
            if (page === 1) {
              setChatData(messages);
            } else {
              setChatData((prev: any[]) => [...messages, ...(prev || [])]);
            }
          },
        },
      );
    }
  }, [conversationId, page, activeMessage, isTeacher]);

  const getConversationId = (id: any, otherUserId: string, isGroupChat: boolean) => {
    const uniqueId = `${id}_${isGroupChat ? "group" : "direct"}`;
    if (activeId === uniqueId) return;
    setActiveId(uniqueId);
    setConversationId(id);
    setChatData([]);

    const token = localStorage.getItem("token");

    if (token) {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));

      // console.log("decoded", decoded);

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
    <div className="flex flex-col items-start py-[14.4px] pl-[14.4px] gap-[7.2px] w-[360px] h-[744.3px] overflow-y-auto scroll-smooth">
      {activeMessage === (isTeacher ? "Teachers" : "Students") ? (
        (dataGetChatConversation?.data?.length ?? 0) > 0 ? (
          dataGetChatConversation?.data?.map((conversation: Conversation) => {
            return (
              <div
                key={conversation.id}
                onClick={() => {
                  getConversationId(conversation.id, conversation.otherUserId, false);
                  setSelectedConversation({ ...conversation, isGroup: false });
                }}
              >
                <ContactItem
                  isActive={activeId === `${conversation.id}_direct`}
                  isOnline={conversation.isOnline}
                  hasUnread={conversation.unreadCount}
                  name={conversation.otherUserName ?? ""}
                  message={
                    signalR.typingUser ? "typing..." : (conversation.lastMessage ?? "")
                  }
                  time={formatTime(conversation.lastMessageAt) ?? ""}
                  avatarUrl={conversation.otherUserPicture || ""}
                />
              </div>
            );
          })
        ) : (
          "No Conversation"
        )
      ) : (
        (dataGetChatMyGroups?.data?.length ?? 0) > 0 ? (
          dataGetChatMyGroups?.data?.map((conversation: ConversationGroup) => {
            return (
              <div
                key={conversation.id}
                onClick={() => {
                  getConversationId(conversation.id, "", true);
                  setSelectedConversation({ ...conversation, isGroup: true });
                }}
              >
                <ContactItem
                  isActive={activeId === `${conversation.id}_group`}
                  name={conversation.name ?? ""}
                  message={
                    signalR.typingUser ? "typing..." : (conversation.lastMessage ?? "")
                  }
                  time={formatTime(conversation.lastMessageAt) ?? ""}
                  avatarUrl={conversation.groupPicture || ""}
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
