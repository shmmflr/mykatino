import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../Core/Context/UserContetext';

const EmployeeLogin = () => {
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  const contexts = useContext(context);
  const {
    phoneNumber,
    setPhoneNumber,
    validate,
    handleEmployeeLogin,
  } = contexts;

  // const handleChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };
  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <p className="login-title">ورود کارجویان</p>
          <form
            onSubmit={(e) => handleEmployeeLogin(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            {/* <input
              ref={focusInput}
              className="my-input mt-2 pr-3"
              placeholder="شماره موبایل"
              value={phoneNumber}
              onChange={handleChange}
            /> */}
            <input
              ref={focusInput}
              name="phoneNumber"
              className="my-input mt-2 pr-3"
              placeholder=" شماره موبایل : 09123456789"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validate.current.showMessageFor('phoneNumber');
              }}
            />
            {validate.current.message(
              'phoneNumber',
              phoneNumber,
              'required|max:11|phone'
            )}
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
              <div class="form-check mr-3 ">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="remember"
                  checked
                />
                <label class="form-check-label mr-3" for="remember">
                  مرا بخاط بسپار
                </label>
              </div>
              <div className="ml-3 d-flex align-items-center mt-3">
                <Link to="/Employee-Register">
                  <p className="btn-login3 ml-2">ثبت نام کارجویان</p>
                </Link>

                <button className="verification-code btn-login mb-3">
                  ارسال کد تایید
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <Link to="/Employer-Login">
            <p className="login-employer ">ورود کارفرمایان</p>
          </Link>
          <Link to="/Employer-Register">
            <p className="register-employer btn-record">ثبت نام کارفرمایان</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
