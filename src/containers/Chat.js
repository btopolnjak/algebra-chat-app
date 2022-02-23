import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Input from "../components/Input";
import MessageList from "../components/MessageList";
import Sidebar from "../components/Sidebar";
import {
  setUser,
  setMessages,
  setSidebar,
  setMembers,
  setMemberJoin,
  setMemberLeft,
} from "../redux/actions";

const CLIENT_ID = "JkDkz1ycaG9m6bbG";

class Chat extends Component {
  constructor(props) {
    super(props);

    // Make a new Drone instance
    this.drone = new window.Scaledrone(CLIENT_ID, {
      data: this.props.user,
    });

    this.drone.on("error", (error) => console.error(error));
    const room = this.drone.subscribe("observable-room");

    room.on("message", (message) => this.props.setMessages(message));
    room.on("member_join", (member) => this.props.setMemberJoin(member));
    room.on("member_leave", (member) => this.props.setMemberLeft(member));
    room.on("members", (members) => {
      const currentMembers = members.map((member) => {
        return {
          userName: member.clientData.userName,
          userColor: member.clientData.userColor,
          userAvatar: member.clientData.userAvatar,
          userId: member.id,
        };
      });
      this.props.setMembers(
        currentMembers.filter((data) => data.userId !== this.drone.clientId)
      );
    });

    this.onSendMessage = (message) => {
      this.drone.publish({
        room: "observable-room",
        message: message,
      });
    };
  }

  // Disconnect Drone from server
  componentWillUnmount() {
    this.drone.close();
  }

  render() {
    return (
      <div className="desktop-container">
        <div className="chat-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              width: this.props.sidebar ? `calc(100% - 15rem)` : "100%",
            }}
          >
            <Header setSidebar={this.props.setSidebar} />
            <MessageList />
            <Input onSendMessage={this.onSendMessage} />
          </div>
          <Sidebar
            setSidebar={this.props.setSidebar}
            setUser={this.props.setUser}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    messages: state.messages,
    sidebar: state.sidebar,
    members: state.members,
  };
}

const mapDispatchToProps = {
  setUser,
  setMessages,
  setSidebar,
  setMemberJoin,
  setMemberLeft,
  setMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
