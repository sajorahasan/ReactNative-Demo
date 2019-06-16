import { combineReducers } from "redux";
import app from "./AppReducer";
import language from "./LanguageReducer";

export default combineReducers({
  app,
  language
});
