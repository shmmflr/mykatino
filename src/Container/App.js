import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Katino from './Katino';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Katino />
      </Router>
    </>
  );
};

export default App;
