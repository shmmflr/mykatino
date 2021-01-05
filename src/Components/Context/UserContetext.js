import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { verifyCodes } from '../../services/VerifyCode';
import { errorMessage, successMessage } from '../utils/message';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Action/user';
import { tokenDecoded } from '../utils/tokenDecode';
import {
  employeeRegister,
  employerRegister,
  userLogin,
} from '../../services/UserService';

export const context = createContext({});

const UserContext = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [role] = useState('');
  const [verifyCode, setverifyCode] = useState('');
  const history = useHistory();

  const dispatch = useDispatch();

  //  employer-Register

  const handleEmployerRegister = async (event) => {
    event.preventDefault();
    const user = {
      fullName,
      phoneNumber,
    };
    try {
      const { status } = await employerRegister(user);
      // console.log(user);
      if (status === 200) {
        // successMessage('ثبت نام با موفقیت انجام شد.');
        history.push(`/credit-code-employer?phoneNumber=${phoneNumber}`);
      }
    } catch (ex) {
      console.log(ex);
      errorMessage('مشکلی پیش آمده است');
    }
  };

  // employer-Login

  const handleEmployerLogin = async (event) => {
    event.preventDefault();
    const user = {
      phoneNumber,
      role: 'Employer',
    };
    try {
      const { status } = await userLogin(user);
      if (status === 200) {
        // successMessage('ورود با موفقیت انجام شد.');
        history.push(`/credit-code-employer?phoneNumber=${phoneNumber}`);
      }
    } catch (ex) {
      errorMessage('مشکلی پیش آمده است.');
    }
  };

  // employee-Register

  const handleEmployeeRegister = async (event) => {
    event.preventDefault();
    const user = {
      fullName,
      phoneNumber,
    };

    try {
      const { status } = await employeeRegister(user);
      // console.log('status', status);
      // console.log('user', user);

      if (status === 200) {
        // successMessage('ثبت نام با موفقیت انجام شد.');
        history.push(`/credit-code-employee?phoneNumber=${phoneNumber}`);
      }
    } catch (ex) {
      errorMessage('مشکلی پیش آمده است.');
    }
  };

  //   employee-Login

  const handleEmployeeLogin = async (event) => {
    event.preventDefault();
    const user = {
      phoneNumber,
      role: 'Employee',
    };

    try {
      const { status } = await userLogin(user);

      if (status === 200) {
        // toast.success('ورود با موفقیت انجام شد', { position: 'top-right' });
        history.push(`/credit-code-employee?phoneNumber=${phoneNumber}`);
      }
    } catch (ex) {
      console.log(ex);
      errorMessage('مشکلی پیش آمده است.');
    }
  };
  //   verify-Code

  const handleVerifyCode = async (event) => {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumberParams = urlParams.get('phoneNumber');
    const user = {
      phoneNumber: phoneNumberParams,
      verifyCode: parseInt(verifyCode),
    };
    try {
      const { status, data } = await verifyCodes(user);
      console.log(data);
      if (status === 200) {
        toast.success('ورود با موفقیت انجام شد', { position: 'top-right' });
        localStorage.setItem('token', data.resul.token);
        dispatch(addUser(tokenDecoded(data.resul.token).payload.user));
        history.push(`/`);
    
      }
    } catch (ex) {
      errorMessage('مشکلی پیش آمده است.');
    }
  };
  return (
    <context.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        fullName,
        setFullName,
        role,
        verifyCode,
        setverifyCode,
        handleEmployeeLogin,
        handleEmployeeRegister,
        handleVerifyCode,
        handleEmployerRegister,
        handleEmployerLogin,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default UserContext;
