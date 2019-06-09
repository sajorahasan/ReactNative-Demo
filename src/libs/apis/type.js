import log from "@log";
import strings from "@language";
import Global from "@common-functions";
import { api } from "@apis/config";

class type {}

type.get = (url, params) => {
  return new Promise((resolve, reject) => {
    try {
      api.get(url, params).then(res => {
        log.info(strings.apiResponse, res);
        if (res.ok) {
          log.success(strings.apiSuccess, res);
          resolve(res);
        } else {
          const error = Global.getError(res);
          log.error(strings.apiError, res);
          reject(error);
        }
      });
    } catch (err) {
      const error = Global.getError(err);
      log.error(strings.apiError, err);
      reject(error);
    }
  });
};

type.post = (url, params) => {
  return new Promise((resolve, reject) => {
    try {
      api.post(url, params).then(res => {
        log.info(strings.apiResponse, res);
        if (res.ok) {
          log.success(strings.apiSuccess, res);
          resolve(res);
        } else {
          const error = Global.getError(res);
          log.error(strings.apiError, res);
          reject(error);
        }
      });
    } catch (err) {
      const error = Global.getError(err);
      log.error(strings.apiError, err);
      reject(error);
    }
  });
};

export default type;
