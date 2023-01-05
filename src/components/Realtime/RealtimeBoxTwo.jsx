import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import _ from 'lodash';
import RealtimeIconBox from './RealtimeIconBox.jsx';
import SectionTitle from '../SectionTitles/SectionTitle';
import Parallax from 'parallax-js';

const cleanData = (realtimeData) => {
    const symbols = _.uniq(_.map(realtimeData, 'symbol'));
    const result = [];
    for (const symbol of symbols) {
        const rows = realtimeData.filter((box) => box.symbol === symbol);
        let descriptions = [];
        const timeframes = [];
        let price = 0;
        let sentiment = 0;
        for (const row of rows) {
            timeframes.push(row.timeframe);
            descriptions.push(row.desc);
            price = row.price;
            sentiment = row.sentiment;
        }
        result.push({symbol, price, sentiment, timeframes: _.uniq(timeframes), desc: _.uniq(descriptions)});
    }
    return _.sortBy(result, ['symbol']);
}

const RealtimeBoxTwo = ({ transformed, classOption }) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    // const transformed = transformData(IconBoxData, StrategyData, SettingsData);
    const boxData = cleanData(transformed);
    return (
        <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container">
                <SectionTitle
                    headingOption="fz-32"
                    title="real-time daytrading analysis"
                    subTitle="Our real-time daytrading analysis is based on the latest market data and is updated every minute."
                />
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation">
                    {boxData && boxData.length > 0 && boxData.map((single, key) => {
                        return(
                            <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                <RealtimeIconBox classOption="box-border" data={single} key={key} />
                            </div>
                        ); 
                    })}

                    <div className="shape shape-1" id="scene" ref={sceneEl}>
                        <span data-depth="1"><img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" /></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

RealtimeBoxTwo.propTypes = {
    transformed: PropTypes.array.isRequired,
    classOption: PropTypes.string
};

RealtimeBoxTwo.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default RealtimeBoxTwo
