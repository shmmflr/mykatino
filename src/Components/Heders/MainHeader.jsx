import React from 'react'

const MainHeader = () => {
    return (
        <>
            <div className="b-nav d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <form className=" b-nav-items ">
            <div className="form-count form-row align-items-center mx-xs-2 d-flex justify-content-around align-items-center ">
              <div className=" input-items col-lg-5 col-12  my-1  d-flex justify-content-around ">
                <label className="col-lg-4 col-md-3 col-5 label mt-2" for="who">
                  به دنبال چه چیزی هستید؟
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="input-item mr-1 ml-auto"
                    id="who"
                    placeholder="عنوان،شغل،نام شرکت و..."
                  />
                  <div className="input-group-prepend ">
                    <div className="input-group-text icon-pre">
                      {' '}
                      <i className="fa fa-search"></i>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" input-items col-lg-5 my-1 align-items-center d-flex justify-content-center align-items-center">
                <label
                  className="col-lg-3 col-md-3 col-5  mt-2 label"
                  for="city"
                >
                  در کدام شهر؟
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="input-item mr-1  ml-auto"
                    id="city"
                    placeholder="استان ،شهر و..."
                  />
                  <div className="input-group-prepend ">
                    <div className="input-group-text icon-pre">
                      {' '}
                      <i className="fa fa-map-marker"></i>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto my-1">
                <div className="col-auto my-1">
                  <button type="submit" className="btn my-btn btn-login">
                    جستجو
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default MainHeader
