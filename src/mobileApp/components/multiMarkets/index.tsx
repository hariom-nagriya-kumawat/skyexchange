import React, { Fragment } from 'react';
import NoMarkets from './noMarkets';

const MultiMarkets = () => {
    return (
        <Fragment>
            <div id="multiMarketsWrap" className="mian-wrap">
                <h3 id="multiMarketHeader"></h3>
                <NoMarkets />
            </div>
        </Fragment>
    )
}

export default MultiMarkets
