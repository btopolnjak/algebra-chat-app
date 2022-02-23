import React, { useState } from "react";

// Material UI Imports
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";

export default function Input({ onSendMessage }) {
  const [inputField, setInputField] = useState("");
  function handleSendMessage() {
    onSendMessage(inputField);
    setInputField("");
  }
  return (
    <footer className="chat-bar">
      <input
        value={inputField}
        placeholder="Type message and press Enter"
        onChange={(event) => setInputField(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") handleSendMessage();
        }}
        className="chat-input"
      ></input>
      <Tooltip title="Send">
        <IconButton color="primary" onClick={() => handleSendMessage()}>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </footer>
  );
}
