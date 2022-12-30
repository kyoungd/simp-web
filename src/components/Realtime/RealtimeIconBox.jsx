import PropTypes from "prop-types";
import _ from 'lodash';
import React from 'react';

const RealtimeIconBox = ({ data, classOption }) => {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className={`icon-box text-center ${classOption}`}>
            <div className="content">
                <h3 className="title">{data.symbol}</h3>
                <div className="desc">
                    <p>
                      {`price: ${USDollar.format(data.price)}`} <br/>
                      {`strategy: ${_.join(data.desc, ',')}`} <br/>
                      {`time: ${_.join(data.timeframes, ',')}`} <br />
                      {`news: ${Math.round(100 * data.sentiment)}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

RealtimeIconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

RealtimeIconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default RealtimeIconBox;
