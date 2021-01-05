import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  myStyle: {
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px',
  },
}));

const InstantAd = () => {
  const classes = useStyles();

  return (
    <div className="my-card-3 b-redius mr-3">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2  ">
                    <div>
                      <p class="card-text  font-title-body">
                        <span className="	fa fa-building"></span> پرشیا شبکه
                      </p>
                    </div>

                    <p class="card-text  font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد : <i> تمام وقت </i>
                    </p>
                  </div>

                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark-o mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2 ">
                    <p class="card-text d-inline font-title-body">
                      <span className="	fa fa-building"></span> پرشیا شبکه
                    </p>
                    <p class="card-text d-inline font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text d-inline font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text d-inline font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </div>
                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark-o mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2 ">
                    <p class="card-text d-inline font-title-body">
                      <span className="	fa fa-building"></span> پرشیا شبکه
                    </p>
                    <p class="card-text d-inline font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text d-inline font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text d-inline font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </div>
                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark-o mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2 ">
                    <p class="card-text d-inline font-title-body">
                      <span className="	fa fa-building"></span> پرشیا شبکه
                    </p>
                    <p class="card-text d-inline font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text d-inline font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text d-inline font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </div>
                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark-o mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2 ">
                    <p class="card-text d-inline font-title-body">
                      <span className="	fa fa-building"></span> پرشیا شبکه
                    </p>
                    <p class="card-text d-inline font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text d-inline font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text d-inline font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </div>
                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} lg={6}>
              <div className={classes.myStyle} md={12}>
                <div className=" my-card-2 b-redius ">
                  <div class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <span className="fa fa-bookmark-o mr-auto tittle-font"></span>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between py-2 ">
                    <p class="card-text d-inline font-title-body">
                      <span className="	fa fa-building"></span> پرشیا شبکه
                    </p>
                    <p class="card-text d-inline font-title-body">
                      <span className="fa fa-map-marker"></span> قائمشهر
                    </p>
                    <p
                      class="card-text d-inline font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text d-inline font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </div>
                  <div>
                    <p className="font-text-body">
                      در راستای توسعه تیم امنیت شبکه اقدام به جذب نیرو ب شرایط
                      زیر می نماییم:
                      <br />
                      گروه توسعه ارتباط سیمرغ
                      <br />
                      تمام شهر ها و در صورت داشتن شرایط ، امکان دروکارینیز فراهم
                      استان
                      <br />
                      مکان مصاحبه برای متقاضیان
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InstantAd;
