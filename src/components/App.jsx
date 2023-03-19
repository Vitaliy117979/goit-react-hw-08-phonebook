import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from 'utils/routes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts';
import { refreshUser } from 'redux/auth/operations';



export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  const { HOME, CONTACTS, REGISTER, LOGIN, } = ROUTES;

  return (


    <Routes>
      <Route path={HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path={REGISTER}
          element={
            <RestrictedRoute redirectTo={CONTACTS} component={<Register />} />
          }
        />
        <Route
          path={LOGIN}
          element={
            <RestrictedRoute redirectTo={CONTACTS} component={<Login />} />
          }
        />
        <Route
          path={CONTACTS}
          element={
            <PrivateRoute redirectTo={LOGIN} component={<Contacts />} />
          }
        />
      </Route>
  
      
    </Routes>

  );
};
