import React from "react";
import { useSelector } from "react-redux";

//Material UI Imports
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";

export default function MessageList({ setSidebar, setUser }) {
  const members = useSelector((state) => state.members);
  const sidebar = useSelector((state) => state.sidebar);
  return (
    <div
      className="sidebar"
      style={{
        display: sidebar ? null : "none",
      }}
    >
      <aside className="sidebar-container">
        <div className="sidebar-member-box-top">
          <p>Online Users</p>
        </div>
        <div className="sidebar-member-container">
          {members.map((member) => {
            return (
              <div className="sidebar-member-box" key={member.userId}>
                <p>{member.userName}</p>
                <Avatar
                  alt={member.userName}
                  src={member.userAvatar}
                  sx={{ width: 32, height: 32 }}
                />
              </div>
            );
          })}
        </div>
        <div className="sidebar-logout" onClick={() => setUser(null)}>
          <LogoutIcon sx={{ mr: 1 }} />
          <p>Logout</p>
        </div>
      </aside>
    </div>
  );
}
