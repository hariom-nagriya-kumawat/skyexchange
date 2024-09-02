import React, { Fragment } from 'react';
import BannerSports from "../../images/mobile/gamehall/banner_sports.png";
import VirtualSports from "../../images/mobile/gamehall/banner_virtualsports.png";
import EvoHalf from "../../images/mobile/gamehall/banner_evo-half.png";
import EzugiHalf from "../../images/mobile/gamehall/banner_ezugi-half.png";
import Royalgaming from "../../images/mobile/gamehall/banner_royalgaming.png";
import SkycasinoHalf from "../../images/mobile/gamehall/banner_skycasino-half.png";
import CasinoHalf from "../../images/mobile/gamehall/banner_casino-half.png";

const GameHall = () => {
    return (
        <Fragment>
            <div className="gamehall">
                <a href="javascript:MobileMenuHandler.loadPage(PageCommonConfig.gameHallSportsPage,true)" data-neua="InPlay Banner">
                    <dl className="entrance-title">
                        <dt>Sports</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <dl id="onLiveBoard" className="on_live">
                        <dt>
                            <p className="live_icon"><span></span> LIVE</p>
                        </dt>

                        <dd id="onLiveCount_CRICKET">
                            <p>Cricket</p>
                            <span id="count">5</span>
                        </dd>

                        <dd id="onLiveCount_SOCCER">
                            <p>Soccer</p>
                            <span id="count">10</span>
                        </dd>

                        <dd id="onLiveCount_E_SOCCER">
                            <p>E-Soccer </p>
                            <span id="count">3</span>
                        </dd>

                        <dd id="onLiveCount_TENNIS">
                            <p>Tennis</p>
                            <span id="count">36</span>
                        </dd>

                        <dd id="onLiveCount_BASKETBALL">
                            <p>Basketball</p>
                            <span id="count">1</span>
                        </dd>

                    </dl>
                    <img src={BannerSports} alt="BannerSports" draggable="false" />
                </a>

                {/* <!-- SABA sports --> */}

                <a className="entrance" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'BetRadar', 'SPORTRADAR', '', 'SPORTRADAR_VIRTUAL_001', '', true)" style={{ cursor: "pointer" }} data-neua="BetRadar Banner">
                    <dl className="entrance-title">
                        <dt>Virtual Cricket</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={VirtualSports} alt="VirtualSports" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Evo', 'ROYAL', '', '200215', '', true)" style={{ cursor: "pointer" }} data-neua="EVO Banner">
                    <dl className="entrance-title">
                        <dt>EVO</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={EvoHalf} alt="EvoHalf" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Ezugi', 'ROYAL', '', '100000', '', true)" style={{ cursor: "pointer" }} data-neua="EZUGI Banner">
                    <dl className="entrance-title">
                        <dt>Ezugi</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={EzugiHalf} alt="EzugiHalf" draggable="false" />
                </a>

                <a className="entrance" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal', 'ROYAL', '', '900000', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Royal Gaming</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={Royalgaming} alt="Royalgaming" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'SKYCASINO', 'SKYCASINO', 'LIVE', 'SKYCASINO_LIVE_001', '', true)" style={{ cursor: "pointer" }} data-neua="AEIndia Banner">
                    <dl className="entrance-title">
                        <dt>SKYCASINO</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={SkycasinoHalf} alt="SkycasinoHalf" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Casino', '', '', '', '', false)" style={{ cursor: "pointer" }} data-neua="Casino Banner">
                    <dl className="entrance-title">
                        <dt>Live Casino</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src={CasinoHalf} alt="CasinoHalf" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Blackjack', 'KINGMAKER', '', 'KM_BLACKJACK', '', true)" style={{ cursor: "pointer" }} data-neua="Blackjack Banner">
                    <dl className="entrance-title">
                        <dt>Blackjack</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_blackjack-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal 7 Up Down', 'ROYAL', '', '900001', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>7 Up Down</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_7up7down-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Andar Bahar VR', 'ROYAL', '', '901021', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Andar Bahar VR</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_andarBaharVR-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Supernowa', 'SUPERNOWA', 'LIVE', 'SUPERNOWA', '', true)" style={{ cursor: "pointer" }} data-neua="Supernowa Banner">
                    <dl className="entrance-title">
                        <dt>Supernowa</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_supernowa-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', '7 Mojos', 'SEVENMOJOS', 'LIVE', 'SEVEN_MOJO', '', true)" style={{ cursor: "pointer" }} data-neua="7Mojos Banner">
                    <dl className="entrance-title">
                        <dt>7mojos</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_7mojos-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'HORSEBOOK', 'HORSEBOOK', 'LIVE', 'HORSEBOOK', '', true)" style={{ cursor: "pointer" }} data-neua="HORSEBOOK Banner">
                    <dl className="entrance-title">
                        <dt>HORSEBOOK</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_horsebook-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Minesweeper', 'KINGMAKER', '', 'KM_MINESWEEPER', '', true)" style={{ cursor: "pointer" }} data-neua="Minesweeper Banner">
                    <dl className="entrance-title">
                        <dt>Minesweeper</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_minesweeper-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Teen Patti', 'ROYAL', '', '900004', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Teen Patti</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_teenPatti-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Super Over VR', 'ROYAL', '', '901034', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Super Over VR</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_superOverVR-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'TeenPatti 20-20',
				'JILI', '', 'JILI_TEEN_PATTI_20_20', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>TeenPatti 20-20</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_TeenPatti2020-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI NUMBERKING  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'NumberKing',
				'JILI', '', 'JILI_NUMBERKING', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>NumberKing</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_NumberKing-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Big small  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Big small',
				'JILI', '', 'JILI_BIG_SMALL', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Big small</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_BigSmall-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI TeenPatti Joker  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'TeenPatti Joker',
				'JILI', '', 'JILI_TEEN_PATTI_JOKER', '', true)" style={{ cursor: "pointer" }} data-neua="32Cards Banner">
                    <dl className="entrance-title">
                        <dt>TeenPatti Joker</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_TeenPattiJoker-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI 7up7down  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', '7up7down',
				'JILI', '', 'JILI_7UP_7DOWN', '', true)" style={{ cursor: "pointer" }} data-neua="32Cards Banner">
                    <dl className="entrance-title">
                        <dt>7up7down</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_7up7down-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Dragon & Tiger  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Dragon &amp; Tiger',
		'JILI', '', 'JILI_DRAGON_TIGER', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Dragon &amp; Tiger</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_DragonNTiger-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Auto Roulette', 'ROYAL', '', '900002', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Auto Roulette</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_autoRoulette-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Dus Ka Dum (Cards) VR', 'ROYAL', '', '901013', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Dus Ka Dum (Cards) VR</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_DusKaDumVR-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Callbreak Quick  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Callbreak Quick',
		'JILI', '', 'JILI_CALLBREAK_QUICK', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Callbreak Quick</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_CallbreakQuick-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Sic Bo  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Sic Bo',
		'JILI', '', 'JILI_SIC_BO', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Sic Bo</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_SicBo-Jili-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Baccarat  --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Baccarat',
		'JILI', '', 'JILI_BACCARAT', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Baccarat</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_Baccarat-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Bonus Dice',
		'KINGMAKER', '', 'KM_BONUS_DICE', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Bonus Dice</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_BonusDice-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Heist',
		'KINGMAKER', '', 'KM_HEIST', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Heist</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_Heist-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', '5 Card Poker',
		'KINGMAKER', '', 'KM_32_CARDS', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>5 Card Poker</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_5CardPoker-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Color Game',
		 'KINGMAKER', '', 'KM_COLOR_GAME', '', true)" style={{ cursor: "pointer" }}>
                    <dl className="entrance-title">
                        <dt>Color Game</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_ColorGame-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', '32 Cards', 'KINGMAKER', '', 'KM_32_CARDS', '', true)" style={{ cursor: "pointer" }} data-neua="32Cards Banner">
                    <dl className="entrance-title">
                        <dt>32 Cards</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_32card-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- JILI Rummy --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Rummy', 'JILI', '', 'JILI_RUMMY', '', true)" style={{ cursor: "pointer" }} data-neua="Rummy Banner">
                    <dl className="entrance-title">
                        <dt>Rummy</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_rummy-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Dragon Tiger', 'ROYAL', '', '900005', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Dragon Tiger</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_dragonTiger-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('6', 'Royal Worli Matka VR', 'ROYAL', '', '901010', '', true)" style={{ cursor: "pointer" }} data-neua="ROYAL Banner">
                    <dl className="entrance-title">
                        <dt>Worli Matka VR</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/royalgaming/banner_worliMatkaVR-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- BetGames --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'BetGames', 'BETGAMES', '', 'BETGAME_BACCARAT', '', true)" style={{ cursor: "pointer" }} data-neua="BetGames Banner">
                    <dl className="entrance-title">
                        <dt>BetGames</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_betgames-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- KM Andar Bahar --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Andar Bahar', 'KINGMAKER', '', 'KM_ANDAR_BAHAR', '', true)" style={{ cursor: "pointer" }} data-neua="AndarBahar Banner">
                    <dl className="entrance-title">
                        <dt>Andar Bahar</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_andarBahar-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- KM_Sicbo --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Sicbo', 'KINGMAKER', '', 'KM_SICBO', '', true)" style={{ cursor: "pointer" }} data-neua="Sicbo Banner">
                    <dl className="entrance-title">
                        <dt>Sicbo</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_sicbo-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- KM_7up7down --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', '7 UP 7 Down', 'KINGMAKER', '', 'KM_7UP_7DOWN', '', true)" style={{ cursor: "pointer" }} data-neua="7Up7Down Banner">
                    <dl className="entrance-title">
                        <dt>7 UP 7 Down</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_sevenUpDown-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Coin Toss', 'KINGMAKER', '', 'KM_COIN_TOSS', '', true)" style={{ cursor: "pointer" }} data-neua="CoinToss Banner">
                    <dl className="entrance-title">
                        <dt>Coin Toss</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_CoinToss-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- Teen Patti --> */}

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Teen Patti', 'JILI', '', 'JILI_TEEN_PATTI', '', true)" style={{ cursor: "pointer" }} data-neua="TeenPatti Banner">
                    <dl className="entrance-title">
                        <dt>Teen Patti</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_teenPatti-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'KingMaker', 'KINGMAKER', '', 'KM_CARD_MATKA', '', true)" style={{ cursor: "pointer" }} data-neua="KingMaker Banner">
                    <dl className="entrance-title">
                        <dt>Card Matka</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_cardMatka-half.png" alt="" draggable="false" />
                </a>

                <a className="entrance-half" href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'KingMaker', 'KINGMAKER', '', 'KM_NUMBER_MATKA', '', true)" style={{ cursor: "pointer" }} data-neua="KingMaker Banner">
                    <dl className="entrance-title">
                        <dt>Number Matka</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_numberMatka-half.png" alt="" draggable="false" />
                </a>

                {/* <!-- LUDO --> */}

                <a className="entrance-half" id="pokerLoginBtn" data-neua="Bpoker Banner">
                    <dl className="entrance-title">
                        <dt>Bpoker</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_bpoker-half.png" alt="" draggable="false" />
                </a>

                {/* <!--     SABA sports kabaddi --> */}

                {/* <a className="" >
                    <dl className="entrance-title">
                        <dt>Kabaddi</dt>
                        <dd>Play Now</dd>
                    </dl>
                    <img src="https://statics3.skyfair.vip/images/mobile/gamehall/banner_Kabadi-half.png" alt="" draggable="false" />
                </a> */}

            </div>
        </Fragment>
    )
}

export default GameHall
