import {
  USER,
  MESSAGES,
  MEMBERS,
  MEMBER_JOIN,
  MEMBER_LEFT,
  SIDEBAR,
} from "./actions";

const initialState = {
  user: null,
  members: [],
  messages: [],
  sidebar: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case MEMBERS:
      return { ...state, members: action.payload };
    case MEMBER_JOIN:
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case MEMBER_LEFT:
      const filteredMembers = state.members.filter(
        (member) => member.userId !== action.payload
      );
      return { ...state, members: filteredMembers };
    case SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    default:
      return initialState;
  }
}
