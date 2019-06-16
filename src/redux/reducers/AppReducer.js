import * as types from "../constants/ActionsTypes";

const INITIAL_STATE = {
  app_connection: true,
  network_isConnected: true,
  app_status: "",
  active_tab_index: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NETWORK_STATUS:
      return { ...state, network_isConnected: action.isConnected };

    case types.NO_INTERNET:
      return { app_connection: false };

    case types.APP_STATUS:
      return { ...state, app_status: action.app_status };

    default:
      return state;
  }
};
