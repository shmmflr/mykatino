import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const MainHeader = () => {
  useEffect(() => {
    serverResult();
  }, []);

  const [city, setCity] = useState({
    value: '0',
    label: 'شهر/استان مورد نظر خود را انتخاب کنید',
  });
  const [cityList, setCityList] = useState([]);
  const serverResult = () => {
    const cityOption = [
      { value: 1, label: 'مازندران/ساری' },
      { value: 2, label: 'خراسان رضوی/مشهد' },
      { value: 3, label: 'تهران/تهران' },
      { value: 4, label: 'البرز/کرج' },
      { value: 5, label: 'اصفهان/اصفهان' },
      { value: 6, label: 'گیلان/گیلان' },
      { value: 7, label: 'سمنان/سمنان' },
      { value: 8, label: 'خوزستان/اهواز' },
    ];
    const option = cityOption.map((item) => ({
      value: item.value,
      label: item.label,
    }));
    setCityList(option);
  };
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
                  isSearchable
                  type="text"
                  id="city"
                  name="city"
                  options={cityList}
                  value={city}
                  onChange={setCity}
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
