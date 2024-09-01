import React, { Fragment } from 'react';
import TransparentGif from '../../images/mobile/transparent.gif';

const Support = () => {
    return (
        <Fragment>
            {/* <!-- Support for skyexchange --> */}
            <div className="support-wrap extend-support">
                <div className="extend-btn">

                    <img src={TransparentGif} title="customer" className="support-customer" />
                    <a href="https://wa.link/skyfaircs" target="_blank" className="ui-link">Customer support1</a>
                    <a href="https://wa.link/skyfaircs" target="_blank" className="split-line ui-link">support2</a>

                </div>
                <div className="extend-btn">

                    <img src={TransparentGif} title="WhatsApp" className="support-whatsapp" />
                    <a href="https://wa.link/skyfair" target="_blank" className="ui-link">WhatsApp 3</a>
                    <a href="https://wa.link/skyfair" target="_blank" className="split-line ui-link">WhatsApp 4</a>

                </div>
                <div className="extend-btn">

                    <img src={TransparentGif} title="Telegram" className="support-telegram" />
                    <a href="http://www.t.me/skyfairsupport1" target="_blank" className="ui-link">skyfairsupport1</a>
                    <a href="http://www.t.me/skyfairsupport1" target="_blank" className="split-line ui-link">skyfairsupport1</a>

                </div>
                <div className="support-social">
                    <div className="social-btn">

                    </div>
                    <div className="social-btn">

                        <img src={TransparentGif} title="Email" className="support-mail" />
                        <a href="mailto:support@skyfair.com" target="_blank" className="ui-link">Email</a>

                    </div>
                    <div className="social-btn">

                        <img src={TransparentGif} title="Instagram" className="support-ig" />
                        <a href="https://www.instagram.com/skyfairofficial/" target="_blank" className="ui-link">skyfair_india</a>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Support;
