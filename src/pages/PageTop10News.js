import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import {useQuery} from 'react-query';
import PropTypes from 'prop-types';
import ThreeDotsWave from '../components/Work/ThreeDotWave';

// components
import {getTop10News} from '../components/api/news';
import NewsTable from '../components/Table/NewsTable';
import MotionFadeIn from '../components/MotionFadeIn';

// ----------------------------------------------------------------------

PageTop10News.propTypes = {
    jwt: PropTypes.string.isRequired,
    classOption: PropTypes.string
};

PageTop10News.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default function PageTop10News({jwt, classOption}) {
    const {
        isSuccess,
        isLoading,
        error,
        isError,
        data
    } = useQuery('topnews', () => getTop10News(jwt));
    return (
        <React.Fragment>
            <SEO title="TradeSimp || Top 10 News"/>
            <Header/>
            <Breadcrumb image="images/bg/breadcrumb-bg-three.jpg" title="We work with bold brands that we believe in" content="Home" contentTwo="Top-10-News"/>
            { isLoading && <ThreeDotsWave /> }
            { isError && <div>Error: { error.message } </div> }
            { isSuccess && (
                    <div className={
                        `section section-padding-t90 section-padding-bottom ${classOption}`
                    }>
                        <div className="container">
                            <MotionFadeIn>
                                <NewsTable result={ data } />
                            </MotionFadeIn>
                        </div>
                    </div>
            )}
            <Footer/>
            <ScrollToTop/>
        </React.Fragment>
    );
}
