import React from 'react';
import PropTypes from 'prop-types';
import {useQueries, QueryClient} from 'react-query';

// components
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

import RealtimeTable from '../components/Table/RealtimeTable';
import ThreeDotWave from '../components/Work/ThreeDotWave';
import fetchRealtimeData from '../components/api/fetchRealTimeData';
import { getOne } from '../components/api/dataFetch';
// import RealtimeData from '../components/Realtime/RealtimeData.json';
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
    const queryClient = new QueryClient();
    const getAccountUrl = `${process.env.REACT_APP_ACCOUNT_SERVICE}`;
    const getGlobalUrl = `${process.env.REACT_APP_GLOBAL_SERVICE}`;
    // real-time data need to be updated.
    const [fetchGlobal, fetchAccount, fetchRealtime] = useQueries([
        { queryKey: ['global'], queryFn: () => getOne(getGlobalUrl, jwt) },
        { queryKey: ['account'], queryFn: () => getOne(getAccountUrl, jwt) },
        { queryKey: ['realtime'], queryFn: () => fetchRealtimeData(jwt) },
    ]);

    if (fetchAccount.isSuccess && fetchRealtime.isSuccess && fetchGlobal.isSuccess) {
        console.log(fetchAccount.data);
        console.log(fetchRealtime.data);
        console.log(fetchGlobal.data);
        queryClient.invalidateQueries('realtime');

    }

    return (
        <React.Fragment>
            <SEO title="TRADESIMP || Day Trade"/>
            <Header/>
            <Breadcrumb image="images/bg/breadcrumb-bg-three.jpg" title="Best technology and research for trading" content="Home" contentTwo="Main"/>
            <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
                <div className="container">
                    { (fetchAccount.isLoading || fetchRealtime.isLoading || fetchGlobal.isLoading) && <ThreeDotWave /> }
                    { fetchAccount.isError && <div>Error: { fetchAccount.error.message }</div> }
                    { fetchRealtime.isError && <div>Error: { fetchRealtime.error.message }</div> }
                    { fetchGlobal.isError && <div>Error: { fetchGlobal.error.message }</div> }
                    { fetchAccount.isSuccess && fetchRealtime.isSuccess && fetchGlobal.isSuccess && (
                        <RealtimeTable room={room}
                            strategies={fetchAccount.data}
                            username={username}
                            jwt={jwt}
                            initdata={fetchRealtime.data} 
                            // initdata={RealtimeData}
                            global={fetchGlobal.data}
                        />
                    )} 
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </React.Fragment>
    );
}
