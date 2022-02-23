export const USER = "USER";
export const MESSAGES = "MESSAGES";
export const MEMBERS = "MEMBERS";
export const MEMBER_JOIN = "MEMBER_JOIN";
export const MEMBER_LEFT = "MEMBER_LEFT";
export const SIDEBAR = "SIDEBAR";

export const setUser = (data) => {
  return {
    type: USER,
    payload: data,
  };
};

export const setMessages = (data) => {
  let messageTime = new Date(data.timestamp * 1000);
  return {
    type: MESSAGES,
    payload: {
      member: data.member.clientData,
      text: data.data,
      timeStamp: messageTime,
      messageId: data.id,
    },
  };
};

export const setMembers = (data) => {
  return {
    type: MEMBERS,
    payload: data,
  };
};

export const setSidebar = () => {
  return {
    type: SIDEBAR,
  };
};
export const setMemberJoin = (data) => {
  return {
    type: MEMBER_JOIN,
    payload: {
      userName: data.clientData.userName,
      userColor: data.clientData.userColor,
      userAvatar: data.clientData.userAvatar,
      userId: data.id,
    },
  };
};
export const setMemberLeft = (data) => {
  return {
    type: MEMBER_LEFT,
    payload: data.id,
  };
};
