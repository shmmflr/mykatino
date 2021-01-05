import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const TopFooter = () => {
  const classes = useStyles();

  return (
    <Box component="div" className="my-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            item
            xs={12}
          >
            <Grid item xs={12}>
              <Box
                component="div"
                className="d-flex justify-content-center align-items-center "
              >
                <p className="mt-3 top-nav-title">وبلاگ</p>
                <Box component="div" className="line-row w-88 mx-2"></Box>
                <Link to="/" className="top-nav-link">
                  مشاهده بیشتر
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className="w-100 d-flex justify-content-start align-items-start mt-3"
            >
              <Grid item lg={4} xs={12}>
                <Box className="my-card-4 py-1" mb={1}>
                  <Box
                    component="div"
                    className="d-flex justify-content-start mr-3 align-items-center"
                  >
                    <Box component="div">
                      <img src="../img/img.png" />
                    </Box>
                    <Box item component="div">
                      <p className="mt-4 mb-0 mr-3 my-card-4-title">
                        5 نکته برای یافتن شغل رویاییتان ...
                      </p>
                      <p className="mt-0 mr-3 my-card-4-text">15 شهریور 1399</p>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Box className="my-card-4 py-1" mb={1}>
                  <Box
                    component="div"
                    className="d-flex justify-content-start mr-3 align-items-center"
                  >
                    <Box component="div">
                      <img src="../img/img (1).png" />
                    </Box>
                    <Box component="div">
                      <p className="mt-4 mb-0 mr-3 my-card-4-title">
                        5 نکته برای یافتن شغل رویاییتان ...
                      </p>
                      <p className="mt-0 mr-3 my-card-4-text">15 شهریور 1399</p>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Box className="my-card-4 py-1" mb={1}>
                  <Box
                    component="div"
                    className="d-flex justify-content-start mr-3 align-items-center"
                  >
                    <Box component="div">
                      <img src="../img/img (2).png" />
                    </Box>
                    <Box component="div">
                      <p className="mt-4 mb-0 mr-3 my-card-4-title">
                        5 نکته برای یافتن شغل رویاییتان ...
                      </p>
                      <p className="mt-0 mr-3 my-card-4-text">15 شهریور 1399</p>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default TopFooter;
