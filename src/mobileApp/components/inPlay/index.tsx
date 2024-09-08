import React, { Fragment } from 'react';
import InPlayList from './inPlayList';

const InPlay = () => {
    return (
        <Fragment>
            <div className="mian-wrap">
                <div className="tab-wrap">
                    <ul>
                        <li id="inplay" className=""><a href="javascript:MobileInPlayPage.changeTab('inplay');" data-neua="In-Play">In-Play
                        </a></li>
                        <li id="today" className="select"><a href="javascript:MobileInPlayPage.changeTab('today');">Today
                        </a></li>
                        <li id="tomorrow"><a href="javascript:MobileInPlayPage.changeTab('tomorrow');">Tomorrow
                        </a></li>

                    </ul>
                    <a className="a-search" href="#" onClick={() => { }}>Search</a>
                </div>
                <div className="wrap-highlight_list" id="inPlayData">
                    <InPlayList />
                </div>
            </div>
        </Fragment>
    )
}

export default InPlay
