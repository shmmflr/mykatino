import { Link } from 'react-router-dom';
import React from 'react';

const EmployerFooter = () => {
  return (
    <div className="my-bg-light  my-footer d-flex justify-content-center align-items-center pt-4">
      <Link className="black">
        <p>تماس با ما</p>
      </Link>
      <Link className="mx-5 black">
        <p>سوالات متداول</p>
      </Link>
      <Link className="black">
        <p>قوانین و شرایط استفاده</p>
      </Link>
    </div>
  );
};

export default EmployerFooter;
