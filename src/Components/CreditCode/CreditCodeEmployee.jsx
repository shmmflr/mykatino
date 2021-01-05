import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../Context/UserContetext';

const CreditCodeEmployee = () => {
  const contexts = useContext(context);
  const { handleVerifyCode, verifyCode, setverifyCode } = contexts;

  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex justify-content-between align-items-center w-100 px-3 pt-0">
            <p className="login-title">تایید کد اعتبار سنجی </p>
            <p className="timer">2:00</p>
          </div>
          <form
            onSubmit={(e) => handleVerifyCode(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            <input
              value={verifyCode}
              onChange={(e) => setverifyCode(e.target.value)}
              className="my-input mt-2 pr-3 "
              placeholder="کد تایید را وراد کنید"
            />

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
