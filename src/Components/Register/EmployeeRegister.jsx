import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../Core/Context/UserContetext';

const EmployeeRegister = () => {
  const contexts = useContext(context);
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    validate,
    handleEmployeeRegister,
  } = contexts;

  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);
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
              ref={focusInput}
              name="fullName"
              className="my-input mb-2 pr-3"
              placeholder="نام نام خانوادگی"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                validate.current.showMessageFor('fullName');
              }}
            />
            {validate.current.message('fullname', fullName, 'required|min:6')}

            <input
              name="phoneNumber"
              className="my-input mt-2 pr-3"
              placeholder="شماره موبایل"
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
              <Link to="/Employee-Login" className="mr-3 mt-3">
                <p className="btn-login2">ورود کارجویان</p>
              </Link>
              <button className="verification-code ml-2">ارسال کد تایید</button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <Link to="/Employer-Login">
            <p className="login-employer">ورود کارفرمایان</p>
          </Link>
          <Link to="/Employer-Register">
            <p className="register-employer">ثبت نام کارفرمایان</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegister;
