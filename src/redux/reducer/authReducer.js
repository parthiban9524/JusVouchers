import { AUTH_LOGIN, AUTH_SIGNUP, GET_USER, LOADING } from "../constants";

const initialState = {
  user: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      }; 
      case AUTH_LOGIN:
      return {
        ...state,
      }; 
    case AUTH_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
