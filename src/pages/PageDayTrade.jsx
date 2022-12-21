import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

// components
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

import RealtimeTable from '../components/Table/RealtimeTable';
import ThreeDotWave from '../components/Work/ThreeDotWave';
import fetchRealtimeData from '../components/api/fetchRealTimeData';

// ----------------------------------------------------------------------

PageDayTrade.propTypes = {
    room: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    classOption: PropTypes.string,
    jwt: PropTypes.string.isRequired
};


PageDayTrade.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default function PageDayTrade({room, username, jwt, classOption}) {

    const {isLoading, isSuccess, error, isError, data} = useQuery('realtime', () => fetchRealtimeData(jwt));
    // real-time data need to be updated.

    return (
        <React.Fragment>
            <SEO title="TRADESIMP || Day Trade"/>
            <Header/>
            <Breadcrumb image="images/bg/breadcrumb-bg-three.jpg" title="Best technology and research for trading" content="Home" contentTwo="Main"/>
            <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
                <div className="container">
                    { isLoading && <ThreeDotWave /> }
                    { isError && <div>Error: { error.message }</div> }
                    { isSuccess && (
                        <RealtimeTable room={room}
                            username={username}
                            jwt={jwt}
                            initdata={data}/>
                    )} 
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </React.Fragment>
    );
}
