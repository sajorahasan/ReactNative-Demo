import { Alert } from "react-native";
import strings from "@language";
import { encrypt, decrypt } from "react-native-simple-encryption";

class Global {}

/**
 *  Generate n number of long random string
 */
Global.getId = length => {
  var l = length ? length : 20;
  var text = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < l; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

/**
 *  Set language
 */
Global.setLanguage = code => {
  strings.setLanguage(code);
};

/**
 *  Global Validation
 *  key: What need to be validate
 *  value : Value that need to be validate
 *  value2 : Another Value that need to be validate with or without Value 1
 */
Global.validate = (key, value, value2) => {
  const EMAIL_RE = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,13}$/;
  const PHONE_RE = /^(?=.*[0-9]).{10,10}$/;
  const ZIP_RE = /^(?=.*[0-9]).{5,5}$/;

  switch (key) {
    case "email": {
      if (EMAIL_RE.test(String(value).toLowerCase())) {
        return true;
      } else {
        Alert.alert(strings.error, strings.emailError);
        return;
      }
    }
    case "phone": {
      if (PHONE_RE.test(String(value).toLowerCase())) {
        return true;
      } else {
        Alert.alert(strings.error, strings.phoneError);
        return;
      }
    }
    case "password": {
      if (PASSWORD_RE.test(String(value))) {
        return true;
      } else {
        Alert.alert(strings.error, strings.passwordError);
        return;
      }
    }
    case "matchPassword": {
      if (value === value2) {
        return true;
      } else {
        Alert.alert(strings.error, strings.passwordMatchError);
        return;
      }
    }
    case "zip": {
      if (ZIP_RE.test(value)) {
        return true;
      } else {
        Alert.alert(strings.error, strings.zipError);
        return;
      }
    }
    default:
      break;
  }
};

/**
 *  Encrypt Data using key and that key will be used to decrypt same data
 */
Global.encrypt = (key, val) => {
  return encrypt(key, val);
};

/**
 *  Decrypt Data using key that enter while encrypt
 */
Global.decrypt = (key, val) => {
  return decrypt(key, val);
};

/**
 *  Construct API error
 */

Global.getError = a => {
  var r = Object.assign(a, {}),
    e = strings.apiSomethingWrong;
  return (
    r &&
      (e =
        r && r.message
          ? r.message
          : r.error && r.error.message
          ? r.error.message
          : r.data && r.data.error
          ? r.data.error
          : r.data && r.data.message && r.data.message[0].msg
          ? r.data.message[0].msg
          : strings.apiSomethingWrong),
    e
  );
};

export default Global;
