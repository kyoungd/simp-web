import React from 'react';
import PropTypes from 'prop-types';
import {Card, CircularProgress, TableContainer} from '@mui/material';
import {useQuery} from 'react-query';

// components
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

import RealtimeMessages from '../components/Realtime/RealtimeMessages';
import Scrollbar from '../components/Scrollbar';
import MotionFadeIn from '../components/MotionFadeIn';
import fetchRealtimeData from '../components/api/fetchRealTimeData';
import {useUserState} from '../components/UserContext';

// ----------------------------------------------------------------------

PageDayTrade.propTypes = {
    room: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    classOption: PropTypes.string
};


PageDayTrade.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default function PageDayTrade({room, username, classOption}) {
    const {jwt} = useUserState();

    const {isLoading, error, isError, data} = useQuery('realtime', () => fetchRealtimeData(jwt));
    // real-time data need to be updated.

    return (
        <React.Fragment>
            <SEO title="Exomac || Day Trade"/>
            <Header/>
            <Breadcrumb image="images/bg/breadcrumb-bg-three.jpg" title="Best technology and research for trading" content="Home" contentTwo="Main"/>
            <div className={
                `section section-padding-t90 section-padding-bottom ${classOption}`
            }>
                <div className="container">
                    <MotionFadeIn>
                        <Card>
                            <Scrollbar>
                                <TableContainer sx={
                                    {minWidth: 800}
                                }>
                                    {
                                    isLoading && <CircularProgress/>
                                }
                                    {
                                    isError && <div>Error: {
                                        error.message
                                    }</div>
                                }
                                    {
                                    !isLoading && !isError && (
                                        <RealtimeMessages room={room}
                                            username={username}
                                            jwt={jwt}
                                            initdata={data}/>
                                    )
                                } </TableContainer>
                            </Scrollbar>
                        </Card>
                    </MotionFadeIn>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </React.Fragment>
    );
}

