import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Employer = () => {
  return (
    <Fragment className="container">
      <div className="my-bg-light main-head-employee">
        <div className=" d-flex justify-content-start mt-2 ">
          <Link className="black mx-3 is-active">
            <p>همه آگهی ها</p>
          </Link>
          <Link className="black mx-3">
            <p>آگهی های فعال</p>
          </Link>
          <Link className="black mx-3">
            <p>پیش نویس</p>
          </Link>
          <Link className="black mx-3">
            <p>بسته شده</p>
          </Link>
          <Link className="black mx-3">
            <p>آرشیو شده</p>
          </Link>
        </div>
      </div>
      <div className="my-bg-light main-head-employee px-3">
        <div className=" d-flex align-items-center justify-content-start mt-1">
          <p className="press mt-3">لیست آگهی ها</p>

          <div className="mr-auto d-flex align-items-center">
            <div>
              <Link
                className="press2 normal-font"
                style={{ background: '#E0E0EC' }}
              >
                همه{' '}
              </Link>
              <Link className="press3 normal-font"> نشان شده </Link>
            </div>
            <div className="d-flex mx-2">
              <select className="press-select normal-font ">
                <option value="" disabled selected>
                  {' '}
                  مرتب سازی
                </option>
                <option>صعودی</option>
                <option>نزولی</option>
                <option>بر اساس تاریخ</option>
              </select>
            </div>
            <div className="d-flex ">
              <Link
                to="/Master/PostAnAd"
                className="d-flex align-items-center btn-record2 normal-font"
              >
                درج آگهی <i className="fa fa-plus mr-2"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <form>
            <div className="btn-box">
              <button className="search-btn mr-2">
                <i className="fa fa-search "></i>
              </button>
            </div>
            <input className="form-control my-search pr-5" />
          </form>
        </div>
        <div className="line-row my-5"></div>
        {/* 1 */}
        <div className="d-flex flex-column">
          <div className="press-card d-flex flex-column  mb-3 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center ">
                <p className="bold-font">برنامه نویس فرانت اند (ساری)</p>
                <p className="press4 txt mr-1" disabled>
                  بسته شده
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="press4">بیشتر</p>
                <p className="press4 mx-3">ویرایش</p>
                <div className="bookmark">
                  <i className="fa fa-bookmark-o  mb-3 "></i>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12 d-flex mb-2  mb-md-0">
                <i className="my-badge my-badge1 ">3</i>
                <p className="normal-font2 txt-1 mt-2"> متقاضی بررسی نشده</p>
              </div>
              <div className="col-md-6 col-12 d-flex">
                <i className="my-badge my-badge2 ">7</i>
                <p className="normal-font2 txt-2 mt-2"> در انتظار تایید</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 d-flex mb-2  mb-md-0">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-2">تایید برای مصاحبه</p>
              </div>
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-2">استخدام شده</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="press-card d-flex flex-column mb-3 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center ">
                <p className="bold-font">برنامه نویس فرانت اند (ساری)</p>
                <p className="press4 txt mr-1" disabled>
                  بسته شده
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="press4">بیشتر</p>
                <p className="press4 mx-3">ویرایش</p>
                <div className="bookmark">
                  <i className="fa fa-bookmark-o  mb-3 "></i>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge1 ">3</i>
                <p className="normal-font2 txt-1 mt-1"> متقاضی بررسی نشده</p>
              </div>
              <div className="col-md-6 col-12 d-flex">
                <i className="my-badge my-badge2 ">7</i>
                <p className="normal-font2 txt-2 mt-1"> در انتظار تایید</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">تایید برای مصاحبه</p>
              </div>
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">استخدام شده</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="press-card d-flex flex-column mb-3 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center ">
                <p className="bold-font">برنامه نویس فرانت اند (ساری)</p>
                <p className="press4 txt mr-1" disabled>
                  بسته شده
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="press4">بیشتر</p>
                <p className="press4 mx-3">ویرایش</p>
                <div className="bookmark">
                  <i className="fa fa-bookmark-o  mb-3 "></i>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge1 ">3</i>
                <p className="normal-font2 txt-1 mt-1"> متقاضی بررسی نشده</p>
              </div>
              <div className="col-md-6 col-12 d-flex">
                <i className="my-badge my-badge2 ">7</i>
                <p className="normal-font2 txt-2 mt-1"> در انتظار تایید</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">تایید برای مصاحبه</p>
              </div>
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">استخدام شده</p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="press-card d-flex flex-column mb-3 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center ">
                <p className="bold-font">برنامه نویس فرانت اند (ساری)</p>
                <p className="press4 txt mr-1" disabled>
                  بسته شده
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="press4">بیشتر</p>
                <p className="press4 mx-3">ویرایش</p>
                <div className="bookmark">
                  <i className="fa fa-bookmark-o  mb-3 "></i>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge1 ">3</i>
                <p className="normal-font2 txt-1 mt-1"> متقاضی بررسی نشده</p>
              </div>
              <div className="col-md-6 col-12 d-flex">
                <i className="my-badge my-badge2 ">7</i>
                <p className="normal-font2 txt-2 mt-1"> در انتظار تایید</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">تایید برای مصاحبه</p>
              </div>
              <div className="col-md-6 col-12 d-flex ">
                <i className="my-badge my-badge3 ">0</i>
                <p className="normal-font2 txt-3 mt-1">استخدام شده</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Employer;
