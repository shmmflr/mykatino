import React, { useEffect } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import AllJobs from '../Components/Jobs/AllJobs';
import EmployeeRegister from '../Components/Register/EmployeeRegister';
import EmployerRegister from '../Components/Register/EmployerRegister';
import EmployerLogin from '../Components/Login/EmployerLogin';
import EmployeeLogin from '../Components/Login/EmployeeLogin';
import CreditCodeEmployer from '../Components/CreditCode/CreditCodeEmployer';
import CreditCodeEmployee from '../Components/CreditCode/CreditCodeEmployee';
import UserContetext from '../Core/Context/UserContetext';
import Logout from '../Components/Login/Logout';
import PostAnAd from '../Components/PostAnAd/PostAnAd';
import { useDispatch, useSelector } from 'react-redux';
import { tokenDecode } from '../Core/utils/tokenDecode';
import { addUser, clearUser } from '../Core/Redux/Action/user';
import { isEmpty } from 'lodash';
import NotFound from '../Components/notFound/NotFound';
import MainLayout from '../Components/Layout/MainLayout';
import PrivateLayout from '../Components/Layout/PrivateLayout';
import Employer from '../Components/Employer/Employer';

const Katino = () => {
  const user = useSelector((state) => state.user);
  console.log('user', user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken = tokenDecode(token);
      let dateNow = Date.now() / 1000;
      if (decodeToken.payload.exp < dateNow) {
        dispatch(clearUser());
        localStorage.removeItem(token);
      } else {
        dispatch(addUser(decodeToken.payload));
      }
    }
  }, []);

  return (
    <Switch>
      <Route path={['/Master']}>
        <PrivateLayout>
          <Switch>
            {' '}
            <Route
              path="/Master/PostAnAd"
              render={() =>
                !isEmpty(user) && user.role == 'Employer' ? (
                  <PostAnAd />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Master"
              render={() =>
                !isEmpty(user) && user.role == 'Employer' ? (
                  <Employer />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </PrivateLayout>
      </Route>
      <Route path={['/']}>
        <MainLayout>
          <Switch>
            <Route
              path="/Employee-Register"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <EmployeeRegister />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Employer-Register"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <EmployerRegister />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Employer-Login"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <EmployerLogin />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Employee-Login"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <EmployeeLogin />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Employer-CreditCode"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <CreditCodeEmployer />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/Employee-CreditCode"
              render={() =>
                isEmpty(user) ? (
                  <UserContetext>
                    <CreditCodeEmployee />
                  </UserContetext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={AllJobs} />
            {/* <Route path="*" exact component={NotFound} /> */}

            {/* <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" /> */}
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Katino;
