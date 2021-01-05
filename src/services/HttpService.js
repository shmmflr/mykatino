import axios from 'axios';
import { errorMessage } from '../Components/utils/message';

const token = localStorage.getItem('token');
if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    errorMessage('مشکلی از سمت سرور پیش آمده است');
  }
  return Promise.reject(error);
});

export default {
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
};
