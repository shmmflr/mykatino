import react, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../Context/UserContetext';

const EmployeeRegister = () => {
  const contexts = useContext(context);
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    handleEmployeeRegister,
  } = contexts;
  return (
    <div className="container-fluid">
      <div className="login-card d-flex flex-column">
        <div className="top-login-card d-flex justify-content-center align-items-center flex-column">
          <p className="login-title">ثبت نام کارجویان</p>
          <form
            onSubmit={(e) => handleEmployeeRegister(e)}
            className="w-100 d-flex justify-content-center p-2 flex-column"
          >
            <input
              name="fullName"
              className="my-input mb-2 pr-3"
              placeholder="نام نام خانوادگی"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              name="phoneNumber"
              className="my-input mt-2 pr-3"
              placeholder="شماره موبایل"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
              <Link to="/employee-login" className="mr-3 mt-3">
                <p className="btn-login2">ورود کارجویان</p>
              </Link>
              <button className="verification-code ml-2">ارسال کد تایید</button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <Link to="/employer-login">
            <p className="login-employer">ورود کارفرمایان</p>
          </Link>
          <Link to="/employer-register">
            <p className="register-employer">ثبت نام کارفرمایان</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegister;
