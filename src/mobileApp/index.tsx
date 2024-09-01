import React from 'react';
import Login from "./pages/login";
import "./css/style.css";
import "./css/theme.css";

const MobileAppLayout = () => {
  return (
    <div data-role="page" data-url="/exchange/mobile/login/members/login.jsp" tabIndex={0} className="ui-page ui-page-theme-a ui-page-active" style={{}}>
      <Login />

    </div>
  )
}

export default MobileAppLayout;
