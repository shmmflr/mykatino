import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, Label, Input } from 'reactstrap';
import { InputForm } from '../common/form/input/input';
const PostAnAd = () => {
  const [inputVAl, setInputVal] = useState();
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  useEffect(() => {
    console.log(inputVAl);
  }, [inputVAl]);

  return (
    <>
      <div className="my-post-card d-flex justify-content-center align-items-center flex-column ">
        <div className="w-100 px-1">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <p className="post-title1">درج آگهی جدید</p>

            <Link to="#">
              <p className="post-l">
                بازگشت <i className="fa fa-arrow-left"></i>
              </p>
            </Link>
          </div>
          <div>
            <form className="w-100 d-flex justify-content-center flex-column mt-5 ">
              {/* <InputForm setValue={setInputVal} /> */}
              <input className="form-control" placeholder="عنوان آگهی" />
              <div className="d-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2 w-50 ml-3 ">
                  <label className="label-post mr-1">دسته بندی شغلی</label>
                  <Select
                    options={options}
                    defaultValue={options[0]}
                    formatGroupLabel={formatGroupLabel}
                  />
                </div>
                <div className="mt-2 w-50">
                  <label className="label-post mr-1">انتخاب استان/شهر</label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
              </div>
              <div className="d-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2 w-50 ml-3 ">
                  <label className="label-post mr-1">نوع همکاری </label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
                <div className="mt-2 w-50">
                  <label className="label-post mr-1">میزان حقوق</label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
              </div>
              <div className="w-100 mt-3">
                <CKEditor
                
                  editor={ClassicEditor}
                  config={{
                    toolbar: ['bold', 'italic', '|', 'comment'],
                  }}
                />
              </div>
              <div className="d-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2 w-50 ml-3 ">
                  <label className="label-post mr-1">سابقه کار مرتبط </label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
                <div className="mt-2 w-50">
                  <label className="label-post mr-1">انتخاب استان/شهر</label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
              </div>
              <div className="d-flex justify-content-center w-100   mt-3 ">
                <div className="mt-2 w-50 ml-3 ">
                  <label className="label-post mr-1">جنسیت </label>
                  <Select formatGroupLabel={formatGroupLabel} />
                </div>
                <div className="mt-2 w-50">
                  <label className="label-post mr-1">وضعیت خدمت سربازی</label>
                  <div className="w-100 d-flex justify-content-center align-items-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value=""
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        مهم نیست
                      </label>
                    </div>
                    <div className="form-check form-check-inline ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value=""
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        پایان خدمت
                      </label>
                    </div>
                    <div className="form-check form-check-inline ">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value=""
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        معافیت تحصیلی
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value=""
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        معافیت دائم
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-5 d-flex w-100">
                <p className="post-cash ml-auto">
                  هزینه انتشار آگهی برای 30 روز : 90,000 تومان
                </p>
                <div className="d-sm-block">
                  <Link className="post-cash">ذخیره در پیش نویس </Link>
                  <Link className="success-post">فعال سازی و انتشار </Link>
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
