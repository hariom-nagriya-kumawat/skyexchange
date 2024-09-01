import React, { Fragment } from 'react';
import PoweredBy from "../../../images/mobile/login/betfair_black.png";
import LoginForm from './loginForm';
import PolicyLinks from '../../policy';
import Support from '../../support';

const Login = () => {
    return (
        <Fragment>
            <header className="login-head">
                <a href="#" className="close ui-link" onClick={() => { }}></a>
                <h1>SKYFAIR
                </h1>
                {/* <div id="powerWrap" className="betfair-wrap">
                    <p>Powered by</p>
                    <span>
                        <img src={PoweredBy} alt="Powered By" draggable="false" />
                    </span>
                </div> */}
            </header>

            <LoginForm />

            <PolicyLinks />

            <Support />
        </Fragment>
    )
}

export default Login
