import { NetInfo, AppState } from "react-native";
import { store } from "../../redux/store/";
import * as types from "../../redux/constants/ActionsTypes";
import log from "@log";

export default class Connection {
  startListener = () => {
    AppState.addEventListener("change", this._handleAppStateChange);

    // Network Listener
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  };

  handleConnectionChange = isConnected => {
    log.info("handleConnectionChange", isConnected);
    store.dispatch({ type: types.NETWORK_STATUS, isConnected });
  };

  _handleAppStateChange = nextAppState => {
    log.info("_handleAppStateChange", nextAppState);
    store.dispatch({ type: types.APP_STATUS, nextAppState });
  };

  cleanUp = () => {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    );

    AppState.removeEventListener("change", this._handleAppStateChange);
  };
}
