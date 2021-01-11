import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../Core/Context/UserContetext';

const CreditCodeEmployee = () => {
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  const contexts = useContext(context);
  const {
    verifyCode,
    setverifyCode,
    validate,
    handleVerifyCodeEmployee,
  } = contexts;

  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex justify-content-between align-items-center w-100 px-3 pt-0">
            <p className="login-title">تایید کد اعتبار سنجی </p>
            <p className="timer">2:00</p>
          </div>
          <form
            onSubmit={(e) => handleVerifyCodeEmployee(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            <input
              ref={focusInput}
              name="verifyCode"
              className="my-input mt-2 pr-3 "
              placeholder="کد تایید را وراد کنید"
              value={verifyCode}
              onChange={(e) => {
                setverifyCode(e.target.value);
                validate.current.showMessageFor('verifyCode');
              }}
            />
            {validate.current.message(
              'verifyCode',
              verifyCode,
              'required|min:6|integer'
            )}
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
              <Link to="#" className="mr-3 mt-3">
                <p className="btn-login2 my-qray">ارسال دوباره</p>
              </Link>

              <button className="verification-code ml-3 px-md-5 px-4">
                تایید
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditCodeEmployee;
