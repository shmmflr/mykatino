import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

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

const LatestAd = () => {
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
            <Grid xs={12}>
              <Box component="div" className={classes.myStyle}>
                <Box component="div" className=" my-card-2 b-redius " mx={-2}>
                  <Box component="div" class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <Box
                        component="span"
                        className="fa fa-bookmark-o mr-auto tittle-font"
                      ></Box>
                    </h5>
                  </Box>
                  <Box
                    component="div"
                    className="d-flex justify-content-between"
                    mt={3}
                  >
                    <Box component="div">
                      <p class="card-text  font-title-body">
                        <span className="	fa fa-building"></span> پرشیا شبکه
                      </p>
                    </Box>

                    <p class="card-text  font-title-body">
                      <Box component="span" className="fa fa-map-marker"></Box>{' '}
                      قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد : <i>تمام وقت</i>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className={classes.myStyle}>
                <Box component="div" className=" my-card-2 b-redius " mx={-2}>
                  <Box component="div" class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <Box
                        component="span"
                        className="fa fa-bookmark-o mr-auto tittle-font"
                      ></Box>
                    </h5>
                  </Box>
                  <Box
                    component="div"
                    className="d-flex justify-content-between"
                    mt={3}
                  >
                    <Box component="div">
                      <p class="card-text  font-title-body">
                        <span className="	fa fa-building"></span> پرشیا شبکه
                      </p>
                    </Box>

                    <p class="card-text  font-title-body">
                      <Box component="span" className="fa fa-map-marker"></Box>{' '}
                      قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className={classes.myStyle}>
                <Box component="div" className=" my-card-2 b-redius " mx={-2}>
                  <Box component="div" class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <Box
                        component="span"
                        className="fa fa-bookmark-o mr-auto tittle-font"
                      ></Box>
                    </h5>
                  </Box>
                  <Box
                    component="div"
                    className="d-flex justify-content-between  "
                  >
                    <Box component="div">
                      <p class="card-text  font-title-body">
                        <span className="fa fa-building"></span> پرشیا شبکه
                      </p>
                    </Box>

                    <p class="card-text  font-title-body">
                      <Box component="span" className="fa fa-map-marker"></Box>{' '}
                      قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className={classes.myStyle}>
                <Box component="div" className=" my-card-2 b-redius " mx={-2}>
                  <Box component="div" class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <Box
                        component="span"
                        className="fa fa-bookmark-o mr-auto tittle-font"
                      ></Box>
                    </h5>
                  </Box>
                  <Box
                    component="div"
                    className="d-flex justify-content-between "
                    mt={3}
                  >
                    <Box component="div">
                      <p class="card-text  font-title-body">
                        <span className="	fa fa-building"></span> پرشیا شبکه
                      </p>
                    </Box>

                    <p class="card-text  font-title-body">
                      <Box component="span" className="fa fa-map-marker"></Box>{' '}
                      قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className={classes.myStyle}>
                <Box component="div" className=" my-card-2 b-redius " mx={-2}>
                  <Box component="div" class="card-title">
                    <h5 class="tittle-font2  d-flex">
                      استخدام کارشناس تست نفوذ{' '}
                      <Box
                        component="span"
                        className="fa fa-bookmark-o mr-auto tittle-font"
                      ></Box>
                    </h5>
                  </Box>
                  <Box
                    component="div"
                    className="d-flex justify-content-between   "
                    mt={3}
                  >
                    <Box component="div">
                      <p class="card-text  font-title-body">
                        <span className="	fa fa-building"></span> پرشیا شبکه
                      </p>
                    </Box>

                    <p class="card-text  font-title-body">
                      <Box component="span" className="fa fa-map-marker"></Box>{' '}
                      قائمشهر
                    </p>
                    <p
                      class="card-text font-title-body"
                      style={{ color: '#50D86A' }}
                    >
                      میزان حقوق : 2,500,000 تومان
                    </p>
                    <p class="card-text font-title-body">
                      نوع قرارداد :<i>تمام وقت</i>
                    </p>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <div className="d-flex justify-content-between">
          <button className="my-btn-1 btn btn-block d-flex justify-content-between">
            سایر آگهی ها <i className="fa fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestAd;
