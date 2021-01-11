import http from './HttpService';
import config from './Config.json';

// const ApiKey = process.env.REACT_APP_API_KEY;
// console.log(ApiKey, 2);

// employee-register
export const employeeRegister = (user) => {
  return http.post(
    `${config.katinoapi}/api/Account/EmployeeRegister`,
    JSON.stringify(user)
  );
};

//employer-register
export const employerRegister = (user) => {
  return http.post(
    `${config.katinoapi}/api/Account/EmployerRegister`,
    JSON.stringify(user)
  );
};

//employee-login
export const userLogin = (user) => {
  return http.post(
    `${config.katinoapi}/api/Account/Login`,
    JSON.stringify(user)
  );
};
