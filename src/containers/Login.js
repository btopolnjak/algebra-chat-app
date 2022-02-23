import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import logo from "../images/logo.svg";
import avatar1 from "../images/avatar-01.svg";
import avatar2 from "../images/avatar-02.svg";
import avatar3 from "../images/avatar-03.svg";
import avatar4 from "../images/avatar-04.svg";
import avatar5 from "../images/avatar-05.svg";
import avatar6 from "../images/avatar-06.svg";

// Material UI Imports
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/material/Radio";
import { red, green, blue, deepPurple } from "@mui/material/colors";

const avatarList = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userColor: "#1877f2",
      userAvatar: avatar1,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleInputChange(event) {
    this.setState({ userName: event.target.value });
  }
  handleRadioChange(event) {
    this.setState({ userColor: event.target.value });
  }
  handleAvatarChange(event) {
    let avatarIndex = avatarList.indexOf(this.state.userAvatar);
    if (event === "next") {
      this.setState({
        userAvatar: avatarList[avatarIndex === 5 ? 0 : ++avatarIndex],
      });
    } else if (event === "previous") {
      this.setState({
        userAvatar: avatarList[avatarIndex === 0 ? 5 : --avatarIndex],
      });
    }
  }

  handleLogin() {
    this.props.setUser({
      userName: this.state.userName,
      userColor: this.state.userColor,
      userAvatar: this.state.userAvatar,
    });
  }
  render() {
    return (
      <div className="flex-container">
        <div className="login-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <IconButton onClick={() => this.handleAvatarChange("previous")}>
              <NavigateBeforeIcon />
            </IconButton>
            <Avatar
              alt={this.state.userName}
              src={this.state.userAvatar}
              sx={{ width: 64, height: 64 }}
            />
            <IconButton onClick={() => this.handleAvatarChange("next")}>
              <NavigateNextIcon />
            </IconButton>
          </div>
          <div>
            <Radio
              checked={this.state.userColor === "#1877f2"}
              onChange={this.handleRadioChange}
              value="#1877f2"
              name="radio-buttons"
              sx={{
                color: blue[800],
                "&.Mui-checked": { color: blue[600] },
              }}
            />
            <Radio
              checked={this.state.userColor === "#588c7e"}
              onChange={this.handleRadioChange}
              value="#588c7e"
              name="radio-buttons"
              sx={{
                color: green[800],
                "&.Mui-checked": { color: green[600] },
              }}
            />
            <Radio
              checked={this.state.userColor === "#c94c4c"}
              onChange={this.handleRadioChange}
              value="#c94c4c"
              name="radio-buttons"
              sx={{
                color: red[800],
                "&.Mui-checked": { color: red[600] },
              }}
            />
            <Radio
              checked={this.state.userColor === "#6b5b95"}
              onChange={this.handleRadioChange}
              value="#6b5b95"
              name="radio-buttons"
              sx={{
                color: deepPurple[800],
                "&.Mui-checked": { color: deepPurple[600] },
              }}
            />
          </div>
          <TextField
            fullWidth
            value={this.userName}
            onChange={(event) => this.handleInputChange(event)}
            label="Enter name"
            variant="standard"
            name="userName"
            onKeyPress={(event) => {
              if (event.key === "Enter" && this.state.userName)
                this.handleLogin();
            }}
          />
          <Button
            onClick={this.handleLogin}
            variant="contained"
            fullWidth
            disabled={!this.state.userName}
          >
            Log In
          </Button>
        </div>
        <div className="copyright-text">
          <img src={logo} className="copyright-logo" alt="logo" />
          <p>
            Developed by <strong>Boris Topolnjak</strong>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
