import React, { Fragment } from 'react'

const UGPolicy = ({ onClose }: any) => {
    return (
        <Fragment>
            <div id="footer-SkyUnP" className="overlay" style={{ display: "flex" }}>
                <div className="frame-wrap">

                    {/* <!-- policy link content --> */}
                    <div className="news-wrap news-wrap-frame">
                        <div className="side-head">
                            <h3>Underage Gaming Policy – Skyfair.vip</h3>
                        </div>
                        <div className="announce-wrap">

                            <p>
                                It is illegal for anyone under the age of 18 to open an account or gamble with <a href="https://www.skyfair.vip/" target="_blank" className="ui-link">https://www.skyfair.vip/</a>
                                (hereinafter
                                "Skyfair.vip"). We strictly
                                prohibit minors from registering or gambling, and we require new members to declare that they are over
                                18 years of age.
                            </p>

                            <p>
                                Skyfair.vip takes all reasonable steps to prevent underage gamblers from accessing and using our
                                services,
                                including the use of
                                identity verification services to ensure that all users are eligible to play. As a registered user, you
                                can help us prevent
                                underage gambling online.
                            </p>

                            <p>
                                Especially if you access your Skyfair.vip account on a shared computer, or if you have underage
                                individuals
                                in your household, it's
                                important that you take precautions to prevent underage gambling. Do not use software that saves your
                                username and password on
                                shared devices, and consider installing parental control programs that can help prevent minors from
                                accessing online gambling
                                websites.
                            </p>

                            <p>
                                Skyfair.vip includes several mechanisms that can help you detect unauthorized use of your player
                                account.
                                Note the last login time and
                                IP address when you log into your account, and review your game transactions and financial transactions
                                in your account details to
                                ensure that there is no suspicious activity.
                            </p>

                            <p>
                                Parents with immediate concerns about underage gambling should report immediately to either email
                                <a href="mailto:support@skyfair.vip.com" className="ui-link">support@skyfair.vip</a> or the support chat.
                            </p>

                        </div>
                        <footer><a href="" className="btn-send ui-link" onClick={onClose}>CLOSE</a></footer>
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default UGPolicy;
