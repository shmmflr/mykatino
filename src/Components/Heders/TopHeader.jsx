import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <header className="bg-light">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/" className="navbar-brand" href="#">
              <img src="../img/logo.png" />
            </Link>

            <button
              className="navbar-toggler outline-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link active  mx-2">
                  خانه
                </Link>
                <a className="nav-item nav-link mx-2" href="#">
                  جستجوی شغل
                </a>
                <a className="nav-item nav-link  mx-2" href="#">
                  رزومه ساز
                </a>
                <a className="nav-item nav-link mx-2" href="#">
                  شرکت های برتر
                </a>
                <a className="nav-item nav-link mx-2" href="#">
                  بخش کارفرمایان
                </a>
                <a className="nav-item nav-link mx-2" href="#">
                  وبلاگ
                </a>
              </div>

              {isEmpty(token) ? (
                <div>
                  <a className="btn btn-record ">
                    <i className="fa fa-shopping-bag ml-1"></i> ثبت آگهی استخدام
                  </a>
                  <Link to="/employee-register" className="btn btn-login mx-2 ">
                    {' '}
                    <i className="fa fa-user"></i> ورود / عضویت
                  </Link>
                </div>
              ) : (
                <div className="ml-3">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                      className="my-blue b-redius px-4 py-2"
                      caret
                    >
                      {' '}
                      <p className="d-inline ml-2">پروفایل</p>{' '}
                    </DropdownToggle>
                    <DropdownMenu className="pl-5 b-redius">
                      {' '}
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="/post-an-ad">
                          {' '}
                          درج آگهی{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          درخواست های من{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          آگهی های نشان شده{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          ایمیل های اطلاع رسانی{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          رزومه ساز{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          مشاهده رزومه{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          تیکت های پشتیبانی{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2" to="#">
                          {' '}
                          تنظیمات حساب کاربری{' '}
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="">
                        <Link className="dropdown py-2 myred" to="/logout">
                          {' '}
                          خروج از حساب{' '}
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
