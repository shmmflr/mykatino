import React from 'react';
// import { withRouter } from 'react-router';
import EmployerTopHeader from '../Heders/EmployerTopHeader';
import EmployerFooter from '../Footer/EmployerFooter';

const MainLayout = (props) => {
  return (
    <div>
      <EmployerTopHeader />

      <div className="container-fluid">{props.children}</div>

      <EmployerFooter />
    </div>
  );
};

export default MainLayout;
