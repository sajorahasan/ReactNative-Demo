import type from "@apis/type";
import log from "@log";
import strings from "@language";
import Global from "@common-functions";

class auth {}

/**
 *  ----------------
 *  API NAME : login
 *  ----------------
 *  API DESCRIPTION: This api is used for login
 *  ----------------
 *  API PARAM:
 *
 *  email: STRING,
 *  password: STRING
 * ------------------
 *
 */
auth.login = param => {
  return type.post("auth/login", param);
};

/**
 *  ----------------
 *  API NAME : forgetPassword
 *  ----------------
 *  API DESCRIPTION: This api is used for resetting password
 *  ----------------
 *  API PARAM:
 *
 *  email: STRING
 * ------------------
 *
 */
auth.forgetPassword = param => {
  return type.post("auth/forgetPassword", param);
};

/**
 *  ----------------
 *  API NAME :
 *
 *  register
 *
 *  ----------------
 *  API DESCRIPTION:
 *
 *  This api is used for register user
 *
 *  ----------------
 *  API PARAM:
 *
 *  email: STRING,
 *  password: STRING,
 *  firstName: STRING,
 *  lastName: STRING,
 *  countryCode: NUMBER,
 *  phoneNo: NUMBER,
 *  schoolName: STRING,
 *  districtName: STRING,
 *  zipCode: NUMBER,
 *  platform: STRING
 *
 * ------------------
 *
 */
auth.register = param => {
  return type.post("auth/signup", param);
};

export default auth;
