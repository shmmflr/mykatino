import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const EmployerTopHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <header className="my-top-bg">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/Master" className="navbar-brand">
              <img src="../img/logo2.png" />
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
              <div className="navbar-nav ml-auto d-flex align-items-center">
                <NavLink to="/Master" className="employer-topnav white mx-4">
                  آگهی ها
                </NavLink>
                <a className="white nav-item nav-link mx-4" href="#">
                  پروفایل شرکت
                </a>
                <a className="white nav-item nav-link  mx-4" href="#">
                  خرید اشتراک و امور مالی
                </a>
              </div>
              <div className="ml-3 d-flex justify-content-center ">
                <Link
                  to="/Master/PostAnAd"
                  className="my-plus d-flex justify-content-center align-content-center mt-1"
                >
                  <i className="fa fa-plus fa-2x "> </i>
                </Link>

                <Link className="my-bell white d-flex justify-content-center align-content-center mt-1 mx-4">
                  <span className="my-badge11 badge badge-danger badge-pill ">
                    14
                  </span>{' '}
                  <i className="fa fa-bell-o fa-2x "></i>
                </Link>

                <Dropdown
                  className="dropdown"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <DropdownToggle className="backGrund-white b-redius  py-2">
                    <div className="d-flex ">
                      <div>
                        {' '}
                        <img
                          className="img-brand2"
                          src="../img/niknet.png"
                        />{' '}
                        <p className="d-inline ml-2 black">شرکت نیک نت</p>{' '}
                      </div>
                      <div className="my-arrow d-flex p-1">
                        <i class="material-icons">keyboard_arrow_down</i>
                      </div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="pl-5 b-redius">
                    {' '}
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="/post-an-ad">
                        {' '}
                        پروفایل شرکت{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link
                        to="/Master/PostAnAd"
                        className="dropdown py-2"
                        to="#"
                      >
                        {' '}
                        ایجاد آگهی استخدام{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="#">
                        {' '}
                        خرید اشتراک و امور مالی{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="#">
                        {' '}
                        ویرایش اطلاعات شرکت{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="#">
                        {' '}
                        ثبت شماره شبا بانکی{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="#">
                        {' '}
                        تاریخچه حساب{' '}
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="">
                      <Link className="dropdown py-2" to="#">
                        {' '}
                        تیکت های پشتیبانی{' '}
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
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default EmployerTopHeader;
