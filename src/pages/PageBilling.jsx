import React from 'react';
import PropTypes from 'prop-types';

// components
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Billings from '../components/Billings';

// ----------------------------------------------------------------------

PageBillings.propTypes = {
    classOption: PropTypes.string,
    jwt: PropTypes.string.isRequired
};


PageBillings.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default function PageBillings({jwt, classOption}) {
    return (
        <React.Fragment>
            <SEO title="TRADESIMP || Billings"/>
            <Header/>
            <Breadcrumb image="images/bg/breadcrumb-bg-three.jpg" title="Best technology and research for trading" content="Home" contentTwo="Main"/>
            <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
              <div className="container">
                <Billings jwt={jwt} />
              </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </React.Fragment>
    );
}
