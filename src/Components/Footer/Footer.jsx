import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
const TopFooter = () => {
  const classes = useStyles();

  return (
    <Box component="div" className="my-bg-light my-footer  ">
      <Box className="my-container">
        <div className={classes.root}>
          <Grid item container spacing={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              item
            >
              <Grid
                className="my-5"
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
                item
              >
                <Box
                  component="div"
                  className="my-componetnt w-100 d-flex justify-content-between flex-column"
                >
                  <h4 className="footer-title mb-4">کارجویان</h4>
                  <Link to="#">
                    <p className="footer-txt">آگهی های استخدام</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">ورود / ثبت نام کارجو</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">ایمیل های اطلاع رسانی</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">رزومه ساز آنلاین</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">آشنایی با شرکت</p>
                  </Link>
                </Box>
              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
                item
              >
                <Box
                  component="div"
                  className="my-componetnt w-100 d-flex justify-content-between flex-column"
                >
                  <h4 className="footer-title mb-4">کارفرمایان</h4>
                  <Link to="#">
                    <p className="footer-txt">درج آگهی استخدام</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">ورود به بخش کارفرمایان</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">تعرفه انتشار آگهی</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">سوالات متداول</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">آشنایی با شرکت</p>
                  </Link>
                </Box>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
                item
              >
                <Box
                  component="div"
                  className="my-componetnt w-100 d-flex justify-content-between flex-column mt-0 pt-0"
                >
                  <h4 className="footer-title mb-4">کاتینو</h4>
                  <Link to="#">
                    <p className="footer-txt">تماس با کاتینو</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">درباره کاتینو</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">راهنمای استفاده برای کارجویان</p>
                  </Link>
                  <Link to="#">
                    <p className="footer-txt">وبلاگ</p>
                  </Link>

                  <p className="footer-txt text-light"> .</p>
                </Box>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
                item
              >
                <Box
                  component="div"
                  className="my-componetnt w-100 d-flex justify-content-between flex-column mt-0 pt-0"
                >
                  <h4 className="footer-title mb-3 ">شبکه های اجتماعی</h4>
                  <Box className="d-flex justify-content-between my-4">
                    <Link to="#">
                      <i className="fa fa-telegram fa-2x telegram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram fa-2x insta"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin fa-2x linkdin"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-whatsapp fa-2x whatsup"></i>
                    </Link>
                  </Box>
                  <Box className="d-flex justify-content-between">
                    <Link to="#">
                      <img
                        src="../img/Rectangle 50.png"
                        className="footer-img"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        src="../img/Rectangle 50 (1).png"
                        className="footer-img"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        src="../img/Rectangle 50 (2).png"
                        className="footer-img"
                      />
                    </Link>
                  </Box>
                  <Box>
                    <p className="footer-txt text-light">.</p>
                  </Box>
                </Box>
              </Grid>

              <Grid xs={12} item>
                <hr />
                <Box className="d-flex justify-content-center align-items-center my-3">
                  <i className="fa fa-copyright ml-1"></i>1399 - کلیه حقوق برای
                  جابینجا محفوظ است.
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default TopFooter;
