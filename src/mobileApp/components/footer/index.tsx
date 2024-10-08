import React from 'react';
import MiniCasino from "../../images/mobile/minigame-promo/promot.gif";
import TransparentGif from "../../images/mobile/transparent.gif";

const Footer = () => {
    return (
        <nav>
            <ul className="mini-lobby">

                <li id="mini" className="main-nav">
                    <a href="javascript:MobileMenuHandler.openMiniGame();" className="ui-link">
                        <img className="icon-promote" src={MiniCasino} alt="mini" crossOrigin='anonymous' />
                    </a>
                </li>

                <li id="sports">
                    <a href="javascript:MobileMenuHandler.setCurrentPage(PageCommonConfig.sportsPage);MobileMenuHandler.loadPage(PageCommonConfig.sportsPage,true);MobileHighlightHandler.initScrollPage()" data-neua="Sports" className="ui-link">
                        <img className="icon-sports" src={TransparentGif} alt="TransparentGif" />Sports
                    </a>
                </li>

                <li id="inPlay">
                    <a href="javascript:MobileMenuHandler.loadPage('inPlay.jsp',true)" data-neua="In-Play" className="ui-link">
                        <img className="icon-inplay" src={TransparentGif} alt="TransparentGif" />In-Play
                    </a>
                </li>

                <li id="home" className="select">
                    <a href="javascript:MobileMenuHandler.loadPage(PageCommonConfig.homePage,true)" data-neua="Home" className="ui-link">
                        <img className="icon-home" src={TransparentGif} alt="TransparentGif" />Home
                    </a>
                </li>

                <li id="multiMarket">
                    <a href="javascript:MobileMenuHandler.loadPage('multiMarket.jsp',true)" data-neua="Multi Markets" className="ui-link">
                        <img className="icon-pin" src={TransparentGif} alt="TransparentGif" />Multi Markets
                    </a>
                </li>

                <li id="account">
                    <a href="javascript:MobileLoginHandler.userIsLogin() ? MobileMenuHandler.loadPage('account.jsp',true) : null" className="ui-link">
                        <img className="icon-account" src={TransparentGif} alt='TransparentGif' />Account
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Footer
