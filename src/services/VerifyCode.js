import http from './HttpService';
import config from './Config.json';
export const verifyCodes = (form) => {
  return http.post(`${config.katinoapi}/api/Account/VerifyCode`, form);
};
