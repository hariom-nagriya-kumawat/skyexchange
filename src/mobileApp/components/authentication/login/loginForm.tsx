import React from 'react';

const handleLogin = () => {

}

const LoginForm = () => {
    return (
        <dl className="form-login">
            <dd id="loginNameErrorClass">
                <input type="email" id="loginName" data-role="none" placeholder="Username" />
            </dd>
            <dd id="passwordErrorClass">
                <input type="password" id="password" data-role="none" placeholder="Password" />
            </dd>
            <dd id="validCodeErrorClass">
                <input type="text" id="validCode" pattern="[0-9]*" data-role="none" placeholder="Validation Code" autoComplete="off" />
                <img id="authenticateImage" src="https://www.skyfair.vip/verifycode.gr?v=1725178335011" alt="" />
            </dd>
            <dd>
                <input name="valid" type="hidden" id="valid" value="8fc40252-54ab-41b1-9910-cece32a21936" />
            </dd>
            <dd>
                <a className="btn-send ui-link" id="loginBtn" onClick={handleLogin}>Login
                </a>
            </dd>
            <dd id="errorMsg" className="state"></dd>
        </dl>
    )
}

export default LoginForm
