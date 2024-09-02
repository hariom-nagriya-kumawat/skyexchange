import React, { Fragment } from 'react';
import GameHall from './gameHall';
import Support from '../support';
import PolicyLinks from '../policy';
import TransparentGif from "../../images/mobile/transparent.gif";

const Home = () => {
    return (
        <Fragment>
            <GameHall />
            <Support />
            <PolicyLinks />

            <div className="extra-wrap">
                <div id="powerWrap" className="power-wrap-b" style={{ display: "none" }}>
                    <span>Powered by</span>
                    <img src={TransparentGif} alt="TransparentGif" />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
