import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addAdver } from '../../Core/Redux/Action/advar';
import { useDispatch } from 'react-redux';
// import { InputForm } from '../common/form/input/input';

const PostAnAd = () => {
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const option = [
    [
      { value: '1', label: 'بیمه' },
      { value: '2', label: 'کامپیوتر' },
      { value: '3', label: 'نرم افزار' },
    ],
    [
      { value: '1', label: 'تمام وقت' },
      { value: '2', label: 'پاره وقت' },
      { value: '3', label: 'دور کاری' },
      { value: '4', label: 'کارآموزی' },
    ],
    [
      { value: '1', label: 'توافقی' },
      { value: '2', label: ' 1 میلیون تومان' },
      { value: '3', label: 'بین 1 تا 3 میلیون تومان' },
      { value: '4', label: 'بین 3 تا 6 میلیون تومان' },
      { value: '5', label: 'بین 6 تا 9 میلیون تومان' },
      { value: '6', label: 'بیشتر از 9 میلیون تومان' },
    ],
    [
      { value: '1', label: 'مرد' },
      { value: '2', label: 'زن' },
    ],

    [
      { value: '1', label: 'مهم نیست' },
      { value: '2', label: ' پایان خدمت' },
      { value: '3', label: 'معافیت تحصیلی' },
      { value: '4', label: 'معافیت دائم' },
    ],
  ];

  const initialState = {
    fieldOfActivity: 0,
    title: '',
    city: '',
    typeOfCooperation: 0,
    salary: 0,
    workExperience: 0,
    degreeOfEducation: 0,
    gender: 0,
    military: '',
    descriptionOfJob: '',
  };
  const [fieldOfActivity, setFieldOfActivity] = useState();
  const [title, setTitle] = useState();
  const [city, setCity] = useState();
  const [typeOfCooperation, setTypeOfCooperation] = useState();
  const [salary, setSalary] = useState();
  const [workExperience, setWorkExperience] = useState();
  const [degreeOfEducation, setDegreeOfEducation] = useState();
  const [gender, setGender] = useState();
  const [military, setmilitary] = useState();
  const [descriptionOfJob, setDescriptionOfJob] = useState();

  // const [form, setstate] = useState(initialState);

  // const updateField = (e) => {
  //   setstate({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const dispatch = useDispatch();

  const handlePostAnAd = async (event) => {
    event.preventDefault();
    try {
      let data = new FormData();
      data.append('fieldOfActivity', Number.parseInt(fieldOfActivity));
      data.append('title', title);
      data.append('city', city);
      data.append('typeOfCooperation', Number.parseInt(typeOfCooperation));
      data.append('salary', Number.parseInt(salary));
      data.append('workExperience', Number.parseInt(workExperience));
      data.append('degreeOfEducation', Number.parseInt(degreeOfEducation));
      data.append('gender', Number.parseInt(gender));
      data.append('military', military);
      data.append('descriptionOfJob', descriptionOfJob);
      dispatch(addAdver(data));
      // dispatch(addAdver(form));
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <div className="my-post-card d-flex justify-content-center align-items-center flex-column ">
        <div className="w-100 px-1">
          <div className="w-100  d-flex justify-content-between mx-auto pt-2  align-items-center">
            <p className="post-title1">درج آگهی جدید</p>

            <Link to="/Master">
              <p className="post-l">
                بازگشت <i className="fa fa-arrow-left"></i>
              </p>
            </Link>
          </div>
          <div>
            <form
              onSubmit={handlePostAnAd}
              className="w-100 d-flex justify-content-center flex-column mt-5 "
            >
              {/* <InputForm setValue={setInputVal} /> */}
              <div className="col-12">
                <input
                  ref={focusInput}
                  name="title"
                  className="form-control"
                  placeholder="عنوان آگهی"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="d-md-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2  col-md-6 col-12">
                  <label className="label-post mr-1">دسته بندی شغلی</label>

                  <Select
                    name="descriptionOfJob"
                    isMulti
                    value={descriptionOfJob}
                    onChange={(e) => setDescriptionOfJob(e.target.value)}
                    options={option[0]}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                  />
                </div>
                <div className="mt-2 col-12 col-md-6 ">
                  <label className="label-post mr-1">انتخاب استان/شهر</label>
                  <Select
                    name="city"
                    placeholder="انتخاب شهر/استان"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="d-md-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2  col-md-6 col-12">
                  <label className="label-post mr-1">نوع همکاری </label>
                  <Select
                    name="typeOfCooperation"
                    placeholder="نوع همکاری"
                    options={option[1]}
                    classNamePrefix="select"
                    value={typeOfCooperation}
                    onChange={(e) => {
                      setTypeOfCooperation(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-2 col-12 col-md-6">
                  <label className="label-post mr-1">میزان حقوق</label>
                  <Select
                    name="salary"
                    options={option[2]}
                    placeholder="میزان حقوق"
                    value={salary}
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-100 mt-3 col-12">
                <CKEditor
                  name="descriptionOfJob"
                  editor={ClassicEditor}
                  config={{
                    language: 'fa',
                    toolbar: [
                      'bold',
                      '|',
                      'italic',
                      '|',
                      'bulletedList',
                      '|',
                      'numberedList',
                      '|',
                      'undo',
                      '|',
                      'redo',
                      '|',
                    ],
                  }}
                />
              </div>
              <div className="d-md-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2  col-md-6 col-12">
                  <label className="label-post mr-1">سابقه کار مرتبط </label>
                  <Select
                    name="workExperience"
                    value={workExperience}
                    onChange={(e) => {
                      setWorkExperience(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-2 col-12 col-md-6">
                  <label className="label-post mr-1">انتخاب استان/شهر</label>
                  <Select
                    name="city"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="d-md-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2  col-md-6 col-12">
                  <label className="label-post mr-1">جنسیت </label>
                  <Select
                    name="gender"
                    options={option[3]}
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-2 col-12 col-md-6">
                  <label className="label-post mr-1">وضعیت خدمت سربازی</label>
                  <Select
                    name="military"
                    options={option[4]}
                    value={military}
                    onChange={(e) => {
                      setmilitary(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center  ">
                  <div className=" mt-5 col-lg-6 col-12 ">
                    <p className="post-cash ">
                      هزینه انتشار آگهی برای 30 روز : 90,000 تومان
                    </p>
                  </div>

                  <div className="mt-lg-5 mt-2 col-lg-3 col-12 mr-lg-3">
                    <Link className="post-cash">ذخیره در پیش نویس </Link>
                  </div>
                  <div className="mt-lg-5 mt-4 mb-2 col-lg-3 col-12 ">
                    <button className="success-post">
                      فعال سازی و انتشار{' '}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostAnAd;
