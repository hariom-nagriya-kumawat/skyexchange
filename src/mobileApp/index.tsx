import React, { Fragment } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PromoBanner from './components/promoBanner';
import Loader from './components/loader';
import Home from './components/home';
import Login from "./pages/login";
import "./css/style.css";
import "./css/theme.css";

const MobileAppLayout = () => {
  return (
    <Fragment>
      <div data-role="page" data-url="/exchange/mobile/login/members/login.jsp" tabIndex={0} className="ui-page ui-page-theme-a ui-page-active" style={{}}>
        {/* <Login /> */}
        <Header />
        <PromoBanner />
        <Footer />
        <Loader />

        <div id="page" role="page">
          <div className="mian-wrap">
            <Home />
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default MobileAppLayout;
