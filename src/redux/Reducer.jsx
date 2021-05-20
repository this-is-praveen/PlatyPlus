import { LOGINUSER, LOGOUT } from "./ActionTypes";

const Reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOGINUSER: {
      return {
        userDetails: { ...action.payload },
        ...state,
      };
    }
    case LOGOUT:
      delete state.userDetails;
      return { ...state };
    default: {
      return { ...state };
    }
  }
};

export default Reducer;
