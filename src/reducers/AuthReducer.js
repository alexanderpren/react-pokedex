import { types } from "../constants/types";

export const AuthReducer = (state ={}, action) => {
  switch (action.type) {
    case types.login: {
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    }
    default:
      return state;
  }
};
