import React, { Fragment } from 'react'

const Loader = () => {
    return (
        <Fragment>
            <div className="loading-overlay" style={{ display: "none" }} id="loading">
                <div className="loading-wrap" style={{ display: "flex" }}>
                    <div className="loading">
                        <div></div>
                        <div></div>
                    </div>
                    <p>Loading...</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Loader;
