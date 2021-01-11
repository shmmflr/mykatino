import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>صفحه مورد نظر یافت نشد!</h2>
        <p>احتمالا صفحه مورد نظر شما حذف یا تغییر نام داده شده است.</p>
        <Link to="/">بازگشت به صفحه اصلی</Link>
        <div className="notfound-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
