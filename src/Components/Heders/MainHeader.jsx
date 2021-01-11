import React from 'react';
import Select from 'react-select';

const MainHeader = () => {
  return (
    <>
      <div className="b-nav d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <form className=" b-nav-items ">
            <div className="d-lg-flex justify-content-lg-between">
              <div class="col-lg-5 col-12 mb-3">
                <label className="label  mt-2" for="who">
                  به دنبال چه چیزی هستید؟
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="who"
                  placeholder="عنوان،شغل،نام شرکت و..."
                />
              </div>
              <div class="col-lg-5 col-12 mb-3">
                <label className="label mt-2" for="city">
                  در کدام شهر؟
                </label>

                <Select
                  type="text"
                  id="city"
                  placeholder="عنوان،شغل،نام شرکت و..."
                />
              </div>

              <div className="col-lg-2 col-12  my-btn  d-flex align-items-end">
                <a className="btn btn-login d-block w-100">جستوجو</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
