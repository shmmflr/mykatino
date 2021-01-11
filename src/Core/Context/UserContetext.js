import { createContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyCodes } from '../services/VerifyCode';
import { successMessage } from '../utils/message';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/Action/user';
import { tokenDecode } from '../utils/tokenDecode';
import {
  employeeRegister,
  employerRegister,
  userLogin,
} from '../services/UserService';
import SimpleReactValidator from 'simple-react-validator';

export const context = createContext({});

const UserContext = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [role] = useState('');
  const [verifyCode, setverifyCode] = useState('');
  const history = useHistory();
  const [, forceUpdate] = useState();
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //Validations
  const validate = useRef(
    new SimpleReactValidator({
      messages: {
        required: 'پر کردن این بخش الزامی است',
        min: 'نباید از 6 حرف باشد',
        max: 'شماره موبایل باید 11 رقم داشته باشد',
        phone: 'لطفا شماره موبایل را صحیح وارد کنید',
        integer: 'باید عدد 6 رقمی که برایتان ارسال شده را وارد کنید',
      },
      element: (messages) => (
        <div style={{ color: 'red', fontSize: '12px' }}>{messages}</div>
      ),
    })
  );

  //  employer-Register

  const handleEmployerRegister = async (event) => {
    event.preventDefault();
    const user = {
      fullName,
      phoneNumber,
    };
    try {
      if (validate.current.allValid()) {
        const { status } = await employerRegister(user);
        if (status === 200) {
          history.push(`/Employer-CreditCode?phoneNumber=${phoneNumber}`);
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
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
      if (validate.current.allValid()) {
        const { status, data } = await userLogin(user);
        console.log(data);
        if (status === 200) {
          history.push(`/Employer-CreditCode?phoneNumber=${phoneNumber}`);
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      // const { data } = await userLogin(user);

      // errorMessage(data.message[0]);
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
      if (validate.current.allValid()) {
        const { status } = await employeeRegister(user);
        if (status === 200) {
          history.push(`/Employee-CreditCode?phoneNumber=${phoneNumber}`);
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
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
      if (validate.current.allValid()) {
        const { status } = await userLogin(user);

        if (status === 200) {
          history.push(`/Employee-CreditCode?phoneNumber=${phoneNumber}`);
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  //   verify-Code

  const handleVerifyCodeEmployee = async (event) => {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumberParams = urlParams.get('phoneNumber');
    const user = {
      phoneNumber: phoneNumberParams,
      verifyCode: parseInt(verifyCode),
    };
    try {
      if (validate.current.allValid()) {
        const { status, data } = await verifyCodes(user);
        console.log('data.', data);
        if (status === 200) {
          successMessage('خوش آمدید');
          localStorage.setItem('token', data.resul.token);
          let decode = tokenDecode(data.resul.token);
          dispatch(addUser(decode.payload));
          history.replace('/');
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleVerifyCodeEmployer = async (event) => {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumberParams = urlParams.get('phoneNumber');
    const user = {
      phoneNumber: phoneNumberParams,
      verifyCode: parseInt(verifyCode),
    };
    try {
      if (validate.current.allValid()) {
        const { status, data } = await verifyCodes(user);
        console.log('data.', data);
        if (status === 200) {
          successMessage('خوش آمدید');
          localStorage.setItem('token', data.resul.token);
          let decode = tokenDecode(data.resul.token);
          dispatch(addUser(decode.payload));
          history.replace('/Master');
        }
      } else {
        validate.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
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
        validate,
        setverifyCode,
        handleEmployeeLogin,
        handleEmployeeRegister,
        handleVerifyCodeEmployee,
        handleVerifyCodeEmployer,
        handleEmployerRegister,
        handleEmployerLogin,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default UserContext;
