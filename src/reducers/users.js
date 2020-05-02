import { GET_USERS_LIST } from "../actions/userAction";

let initialState = {
  getUsersList: false,
  title: "MRHDP",
  errorUsersList: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default users;
