import React, { Fragment } from 'react';
import PromoImage from "../../images/mobile/promo/kv-skyfair-m.jpg";

const PromoBanner = () => {
    return (
        <Fragment>
            <div id="promoteWrap" className="promo-banner-wrap active">
                <div className="promo-banner">
                    <ul id="slides" className="slides">

                        <li className="banner" style={{ display: "list-item" }}>
                            <a onClick={() => window.open('https://wa.link/skyfair', '_blank')} className="ui-link">
                                <img src={PromoImage} alt="" />
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="promo-banner-loading"></div>
            </div>
        </Fragment>
    )
}

export default PromoBanner;
