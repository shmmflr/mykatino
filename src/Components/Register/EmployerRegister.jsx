import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../Context/UserContetext';

const EmployerRegister = () => {
  const contexts = useContext(context);
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    handleEmployerRegister,
  } = contexts;
  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <p className="login-title">ثبت نام کارفرمایان</p>
          <form
            onSubmit={(e) => handleEmployerRegister(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            <input
              className="my-input mb-2 pr-3"
              placeholder="نام نام خانوادگی"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="my-input mt-2 pr-3"
              placeholder="شماره موبایل : 09123456789"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
              <Link to="/employer-login" className="mr-3 mt-3 ">
                <p className="btn-login2">ورود کار فرمایان</p>
              </Link>

              <button className="verification-code my-orange ">
                ارسال کد تایید
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <Link to="/employee-login">
            <p className="login-employer my-blue ">ورود کارجویان</p>
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

export default EmployerRegister;
