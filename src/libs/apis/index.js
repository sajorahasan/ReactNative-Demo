import log from "@log";
import strings from "@language";
import _ from "lodash";

import {
  COUNTRIES
} from "./local";

import auth from "./auth";

class apis {}

/*** Authentication ***/
apis.login = auth.login;
apis.forgetPassword = auth.forgetPassword;
apis.register = auth.register;
apis.verify = auth.verify;
/*** Authentication ***/

// Get Standard Countries List
apis.getCountries = () => {
  log.success(strings.apiSuccess, COUNTRIES);
  return COUNTRIES;
};

export default apis;
