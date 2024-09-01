import React, { Fragment, useState } from 'react';
import Kyc from './kyc';
import AboutUs from './aboutUs';
import PrivacyPolicy from './privacyPolicy';
import ResGaming from './resGaming';
import TermsConditions from './termsConditions';
import UGPolicy from './ugPolicy';
import SEPolicy from './sePolicy';
import RulesRegulations from './rulesRegulations';

const PolicyLinks = () => {
    const [isKycShow, setIsKycShow] = useState(false);
    const [isShowAboutUs, setIsShowAboutUs] = useState(false);
    const [isShowPrivacyPolicy, setIsShowPrivacyPolicy] = useState(false);
    const [isShowResGaming, setIsShowResGaming] = useState(false);
    const [isShowTermsConditions, setIsShowTermsConditions] = useState(false);
    const [isShowUGPolicy, setIsShowUGPolicy] = useState(false);
    const [isShowSEPolicy, setIsShowSEPolicy] = useState(false);
    const [isShowRulesRegulations, setIsShowRulesRegulations] = useState(false);

    return (
        <Fragment>
            <ul className="policy-link" style={{ display: "block" }}>
                <li><a href="" className="ui-link" onClick={() => setIsKycShow(true)}>KYC</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowAboutUs(true)}>About Us</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowPrivacyPolicy(true)}>Privacy Policy</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowResGaming(true)}>Responsible Gaming</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowTermsConditions(true)}>Terms and Conditions</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowUGPolicy(true)}>Underage Gaming Policy</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowSEPolicy(true)}>Self-Exclusion Policy</a></li>
                <li><a href="" className="ui-link" onClick={() => setIsShowRulesRegulations(true)}>Rules and Regulations</a></li>
            </ul>

            {isKycShow ? <Kyc onClose={() => setIsKycShow(false)} /> : null}
            {isShowAboutUs ? <AboutUs onClose={() => setIsShowAboutUs(false)} /> : null}
            {isShowPrivacyPolicy ? <PrivacyPolicy onClose={() => setIsShowPrivacyPolicy(false)} /> : null}
            {isShowResGaming ? <ResGaming onClose={() => setIsShowResGaming(false)} /> : null}
            {isShowTermsConditions ? <TermsConditions onClose={() => setIsShowTermsConditions(false)} /> : null}
            {isShowUGPolicy ? <UGPolicy onClose={() => setIsShowUGPolicy(false)} /> : null}
            {isShowSEPolicy ? <SEPolicy onClose={() => setIsShowSEPolicy(false)} /> : null}
            {isShowRulesRegulations ? <RulesRegulations onClose={() => setIsShowRulesRegulations(false)} /> : null}

        </Fragment>
    )
}

export default PolicyLinks;
