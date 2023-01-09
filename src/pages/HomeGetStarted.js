
import React from 'react';
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import GetStartedIconBoxTwo from '../container/GetStarted/GetStartedIconBoxTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const HomeGetStarted = () => {
    let {id} = useParams();
    const workId = parseInt(id, 10)
    return (
        <React.Fragment>
            <SEO title="TRADESIMP || Get Started" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Get to know TradeSimp"
                content="Home"
                contentTwo="Get Started"
            />
            <GetStartedIconBoxTwo id={workId} />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeGetStarted;



