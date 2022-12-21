import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Schedule from '../components/Schedule';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { dataFetch } from '../components/api/dataFetch';
import ThreeDotWave from '../components/Work/ThreeDotWave';

PageWeeklySchedule.propTypes = {
    jwt: PropTypes.string.isRequired,
    getSchedule: PropTypes.string,
    classOption: PropTypes.string
};

PageWeeklySchedule.defaultProps = {
    getSchedule: `${process.env.REACT_APP_SCHEDULE_SERVICE}`,
    classOption: "section section-padding-t90 section-padding-bottom"
};

function PageWeeklySchedule ({jwt, getSchedule, classOption}) {
    // useQuery to fetch schedule data
    const { data, isSuccess, isError, error, isLoading } = useQuery('schedule', () =>
        dataFetch(getSchedule, jwt)
    );
    
    return (
        <React.Fragment>
            <SEO title="TradeSimp || Settings" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-five.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="Settings"
            />
            <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
                <div className="container">
                { isLoading && <ThreeDotWave /> }
                { isError && <div>Error: { error.message } </div> }
                { isSuccess && (<Schedule jwt={jwt} scheduleData = { data } /> ) }
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default PageWeeklySchedule;
