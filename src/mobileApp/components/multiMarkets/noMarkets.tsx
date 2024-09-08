import React, { Fragment } from 'react'

const NoMarkets = () => {
    return (
        <Fragment>
            <div id="noMultiMarkets" className="no-data">
                <h3>
                    There are currently no followed multi markets.
                </h3>
                <p>
                    Please add some markets from events.
                </p>
            </div>
        </Fragment>
    )
}

export default NoMarkets
