import React from 'react';

const BestCompany = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5 d-flex justify-content-between align-items-center">
          <div className=" mb-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 d-flex justify-content-center align-items-around  ">
            <div className=" my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/fara.png" alt="fara"  />
              </div>
              <div>
                <p className="mt-4 para-card">فراگستر</p>
              </div>
            </div>
          </div>
          <div className=" mb-2  col-lg-2 col-md-4 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center ">
            <div className=" my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/dap.png" alt="dap" />
              </div>
              <div>
                <p className="mt-4 para-card">داپ اپ</p>
              </div>
            </div>
          </div>
          <div className=" mb-2  col-lg-2 col-md-4 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center  ">
            <div className=" my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/happy.png" alt="happy" />
              </div>
              <div>
                <p className="mt-4 para-card">هپی</p>
              </div>
            </div>
          </div>
          <div className=" mb-2  col-lg-2 col-md-4 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center ">
            <div className=" my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/snap.png" alt='snapp' />
              </div>
              <div>
                <p className="mt-4 para-card">اسنپ مارکت</p>
              </div>
            </div>
          </div>
          <div className=" mb-2  col-lg-2 col-md-4 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center ">
            <div className=" my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/mobin.png" alt='mobin' />
              </div>
              <div>
                <p className="mt-4 para-card">ارتباطات مبین نت</p>
              </div>
            </div>
          </div>
          <div className=" mb-2  col-lg-2 col-md-4  col-sm-6 col-xs-6 d-flex justify-content-center align-items-center ">
            <div className="my-card  d-flex justify-content-center align-items-center flex-column">
              <div>
                <img src="../img/ratin.png" alt='ratin' />
              </div>
              <div>
                <p className="mt-4 para-card">راتین</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCompany;
