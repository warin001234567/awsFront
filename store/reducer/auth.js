import { LOGIN, SIGNUP } from "../action/auth";

const initialState = {
  user: {
    _id: null,
    username: null,
    password: null,
    tokens: null,
  },
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.user,
        tokens: action.token,
      };
    case SIGNUP:
      return {
        user: action.user,
        tokens: action.token,
      };

    default:
      return state;
  }
};
export default authReducer;
