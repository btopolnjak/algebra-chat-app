import React from "react";
import { useSelector } from "react-redux";

// Material UI Imports
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

function Header({ setSidebar }) {
  const user = useSelector((state) => state.user);

  return (
    <header className="header-bar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={user.userName}
          src={user.userAvatar}
          sx={{ width: 36, height: 36, ml: 1 }}
        />
        <h3 style={{ marginLeft: "1rem" }}>{user.userName}</h3>
      </div>
      <div>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={() => setSidebar()}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
