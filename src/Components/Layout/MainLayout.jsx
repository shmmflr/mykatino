import React from 'react';
import { withRouter } from 'react-router';
import MainHeader from '../Heders/MainHeader';
import TopHeader from '../Heders/TopHeader';
import BestCompany from '../Company/BestCompany';
import Resume from '../Resume/Resume';
import TopFooter from '../Footer/TopFooter';
import Footer from '../Footer/Footer';

const MainLayout = (props) => {
  const { pathname } = props.location;
  return (
    <div>
      <TopHeader />
      {pathname === '/' ? <MainHeader /> : null}

      {pathname === '/' ? <BestCompany /> : null}
      <div className="container-fluid">{props.children}</div>
      {pathname === '/' ? <Resume /> : null}
      {pathname === '/' ? <TopFooter /> : null}
      <Footer />
    </div>
  );
};

export default withRouter(MainLayout);
