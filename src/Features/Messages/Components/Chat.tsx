import { useRef, useState } from "react";
import useSignalR from "../Hooks/useSignalR";
import { BASE_URL } from "../Utils/Api";
import { TypingIndicator } from "./TypingIndicator";

export default function Chat() {
  const token = `${localStorage.getItem("token")}`;
  const isTyping = useRef<any>(null);
  const { connection, messages, typingUser } = useSignalR(token, BASE_URL);

  const [message, setMessage] = useState("");
  const [recipientId, setRecipientId] = useState("");

  const sendMessage = async () => {
    if (!connection) return;

    await connection.invoke("SendMessage", {
      RecipientId: recipientId,
      Content: message,
    });

    setMessage("");
  };

  const handleTyping = () => {
    if (connection?.state !== "Connected") return;

    if (!isTyping.current) {
      connection.invoke("SendTypingIndicator", {
        RecipientId: recipientId,
        IsTyping: true,
      });
      isTyping.current = true;
    }

    if (isTyping.current) {
      clearTimeout(isTyping.current);
    }

    isTyping.current = setTimeout(() => {
      connection.invoke("SendTypingIndicator", {
        RecipientId: recipientId,
        IsTyping: false,
      });
      isTyping.current = false;
    }, 1000);
  };

  return (
    <div>
      <h2>Chat</h2>

      <input
        placeholder="Recipient ID"
        onChange={(e) => setRecipientId(e.target.value)}
      />

      <div style={{ border: "1px solid #ccc", height: 200, overflow: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.senderName}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {typingUser && <p>{typingUser} is typing </p>}

      <TypingIndicator/>

      <label htmlFor="">jfcnjc</label>
      
      <input
      className="w-[400px] border h-[50px]"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          handleTyping();
        }}
      />

      <button onClick={sendMessage}>Send</button>



    </div>

  );
}