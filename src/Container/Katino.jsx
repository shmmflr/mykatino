import React from 'react';
import { Route, Switch } from 'react-router';
import MainLayout from '../Components/Layout/MainLayout';
import AllJobs from '../Components/Jobs/AllJobs';
import EmployeeRegister from '../Components/Register/EmployeeRegister';
import EmployerRegister from '../Components/Register/EmployerRegister';
import EmployerLogin from '../Components/Login/EmployerLogin';
import EmployeeLogin from '../Components/Login/EmployeeLogin';
import CreditCodeEmployer from '../Components/CreditCode/CreditCodeEmployer';
import CreditCodeEmployee from '../Components/CreditCode/CreditCodeEmployee';
import UserContetext from '../Components/Context/UserContetext';
import Logout from '../Components/Login/Logout'
import PostAnAd from '../Components/PostAnAd/PostAnAd';

const Katino = () => {
  return (
    <Switch>
      <MainLayout>
        <Route
          path="/employee-register"
          render={() => (
            <UserContetext>
              <EmployeeRegister />
            </UserContetext>
          )}
        />
        <Route
          path="/employer-register"
          render={() => (
            <UserContetext>
              <EmployerRegister />
            </UserContetext>
          )}
        />
        <Route
          path="/employer-login"
          render={() => (
            <UserContetext>
              <EmployerLogin />
            </UserContetext>
          )}
        />
        <Route
          path="/employee-login"
          render={() => (
            <UserContetext>
              <EmployeeLogin />
            </UserContetext>
          )}
        />
        <Route
          path="/credit-code-employer"
          render={() => (
            <UserContetext>
              <CreditCodeEmployer />
            </UserContetext>
          )}
        />
        <Route
          path="/credit-code-employee"
          render={() => (
            <UserContetext>
              <CreditCodeEmployee />
            </UserContetext>
          )}
        />
        <Route path="/post-an-ad" component={PostAnAd} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={AllJobs} />
      </MainLayout>
    </Switch>
  );
};

export default Katino;
