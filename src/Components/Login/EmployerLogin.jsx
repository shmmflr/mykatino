import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../Context/UserContetext';

const EmployerLogin = () => {
  const contexts = useContext(context);
  const { phoneNumber, setPhoneNumber, handleEmployerLogin } = contexts;
  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <p className="login-title">ورود کارفرمایان</p>
          <form
            onSubmit={(e) => handleEmployerLogin(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            <input
              name="phoneNumber"
              className="my-input mt-2 pr-3"
              placeholder=" شماره موبایل : 09123456789"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
              <div class="form-check mr-3">
                <input type="checkbox" class="form-check-input" id="remember" />
                <label class="form-check-label mr-3" for="remember">
                  مرا بخاط بسپار
                </label>
              </div>
              <button className="verification-code my-orange">
                ارسال کد تایید
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <Link to="/employee-login">
            <p className="login-employer my-blue">ورود کارجویان</p>
          </Link>
          <Link to="/employee-register">
            <p className="register-employer my-bluesky text-blue">
              ثبت نام کارجویان
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
