import React from 'react';
import PropTypes from 'prop-types';
import { useQueries } from 'react-query';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import SettigngsForm from '../components/SettingsForm';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { dataFetch } from '../components/api/dataFetch';
import ThreeDotWave from '../components/Work/ThreeDotWave';

PageSettings.propTypes = {
    jwt: PropTypes.string.isRequired,
    getAccountUrl: PropTypes.string,
    getSubscriptionsUrl: PropTypes.string,
    putAccountUrl: PropTypes.string,
    classOption: PropTypes.string
};

PageSettings.defaultProps = {
    getAccountUrl: `${process.env.REACT_APP_ACCOUNT_SERVICE}`,
    getSubscriptionsUrl: `${process.env.REACT_APP_SUBSCRIPTION_SERVICE}`,
    putAccountUrl: `${process.env.REACT_APP_ACCOUNT_SERVICE}/:0`,
    classOption: "section section-padding-t90 section-padding-bottom"
};

function PageSettings ({jwt, getAccountUrl, putAccountUrl, getSubscriptionsUrl, classOption}) {
    const [fetchAccount, fetchSubscriptions] = useQueries([
        { queryKey: ['account'], queryFn: () => dataFetch(getAccountUrl, jwt) },
        { queryKey: ['subscriptions'], queryFn: () => dataFetch(getSubscriptionsUrl, jwt) }
      ]);
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
                    { (fetchAccount.isLoading || fetchSubscriptions.isLoading) && <ThreeDotWave /> }
                    { fetchAccount.isError && <div>Error while fetching account... {fetchAccount.error} </div> }
                    { fetchSubscriptions.isError && <div>Error while fetching subscriptions... {fetchSubscriptions.error} </div> }
                    { fetchAccount.isSuccess && fetchSubscriptions.isSuccess && 
                        <SettigngsForm 
                            jwt={jwt} 
                            putUrl={putAccountUrl} 
                            account={fetchAccount.data} 
                            subscriptions={fetchSubscriptions.data} 
                        /> }
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default PageSettings;
