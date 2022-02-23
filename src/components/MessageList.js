import React from "react";
import { useSelector } from "react-redux";

//Material UI Imports
import Avatar from "@mui/material/Avatar";

export default function MessageList() {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  return (
    <div className="message-list">
      {messages.map((message) => {
        return (
          <div
            className={
              message.member.userName === user.userName
                ? "message-container-user"
                : "message-container"
            }
            key={message.messageId}
          >
            <Avatar
              alt={message.member.userName}
              src={message.member.userAvatar}
            />
            <div>
              <p
                className="message-member"
                style={{
                  textAlign:
                    message.member.userName === user.userName ? "right" : null,
                }}
              >
                {message.member.userName}
              </p>
              <div
                className="message-text"
                style={{
                  backgroundColor: message.member.userColor,
                  borderRadius:
                    message.member.userName === user.userName
                      ? "0.5rem 0rem 0.5rem 0.5rem"
                      : null,
                }}
              >
                {message.text}
              </div>
            </div>
            <p className="message-timestamp">
              {message.timeStamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
