import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Katino from './Katino';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Katino />
      </BrowserRouter>
    </>
  );
};

export default App;
