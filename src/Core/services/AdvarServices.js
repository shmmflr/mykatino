import http from './HttpService';
import config from './Config.json';

export const createAdvar = (advar) => {
  return http.post(`${config.katinoapi}/api/Adver/CreateAdver`, advar);
};
