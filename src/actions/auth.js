import {types} from "../constants/types"

export const login = (uid,displayName) => ({
  type: types.login,
  payload: {uid,displayName}
});