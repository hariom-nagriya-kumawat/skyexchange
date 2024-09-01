import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const MobileApp = React.lazy(() => import("./mobileApp"));

function App() {
  return (
    <Fragment>
      <MobileApp />
    </Fragment>
  );
}

export default App;
