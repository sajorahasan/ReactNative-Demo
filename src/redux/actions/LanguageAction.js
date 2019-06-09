import * as types from "../constants/ActionsTypes";

export const setLanguage = state => {
  return {
    type: types.SET_LANGUAGE,
    state
  };
};
