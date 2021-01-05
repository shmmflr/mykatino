import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
const Resume = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            className="resume"
          >
            <Grid xs={12} lg={6}>
              <Box
                component="div"
                m={5}
                className="d-flex justify-content-sm-center"
              >
                <img
                  src="../img/resume-illustration.svg"
                  className="resume-img"
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                component="div"
                m={5}
                className="d-flex flex-column justify-content-start align-items-md-center align-items-lg-start resume-items"
              >
                <h3 className="resume-title">آنلاین رزومتو بساز!</h3>

                <p className="my-4 resume-text">
                  با استفاده از رزومه ساز آنلاین کاتینو می توانید به راحتی رزومه
                  خود را بسازید.
                </p>

                <button className="my-btn-2 btn d-flex justify-content-between align-items-center">
                  شروع ساخت رزومه <i className="fa fa-arrow-left"></i>
                </button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Resume;
