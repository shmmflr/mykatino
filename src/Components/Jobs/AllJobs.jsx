import React from 'react';
import InstantAd from './InstantAd';
import LatestAd from './LatestAd';

const AllJobs = () => {
  return (
    <>
      <div className="container-fluid px-4 pt-5">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="col-md-12 ">
              {' '}
              <p className="tittle-font mt-3">
                آگهی های <span className="badge badge-danger">فوری</span>
              </p>
            </div>
            <InstantAd />
          </div>

          <div className="col-lg-4">
            <div className="col-lg-12">
              {' '}
              <p className="tittle-font mt-3">آخرین آگهی ها</p>
            </div>
            <LatestAd />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
