import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { getSubscriptions, getSubscriptionManagement } from '../../utils/stripe-subscriptions';
import ThreeDotWave from '../Work/ThreeDotWave';

const ContainerStyle = styled.div`
  margin: 'auto',
  display: 'flex',
  flex-direction: 'column',
  justify-content: 'center',
  padding: 4
`;

Billings.propTypes = {
    jwt: PropTypes.string.isRequired
};

export default function Billings({ jwt }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getStripeSubscriptions = async () => {
      const result = await getSubscriptions(jwt);
      setSubscriptions(result);
      // const { data } = await axios.get("/subscriptions");
      // console.log("subs => ", data);
      // setSubscriptions(data.data);
    };

    getStripeSubscriptions(jwt);
  }, []);

  const manageSubscriptions = async () => {
    const url = await getSubscriptionManagement(jwt);
    window.open(url);
  };

  return (
    <>
        {subscriptions.length > 0 ? (
        subscriptions.map((sub) => (
            <ContainerStyle key={sub.id}>
            <section>
                <h4 className="fw-bold">{sub.attributes.name}</h4>
                <h5>
                {(sub.attributes.price ).toLocaleString('en-US', {
                    style: 'currency',
                    currency: sub.attributes.currency
                })}
                </h5>
                <p>Status: {sub.attributes.status}</p>
                <p>Card last 4 digit: {sub.attributes.last4}</p>
                <p>
                `Current period ends: ${sub.attributes.renewal_date}`
                {/* Current period end:{' '}
                {moment(sub.current_period_end * 1000)
                    .format('dddd, MMMM Do YYYY h:mm:ss a')
                    .toString()} */}
                </p>
                <button 
                    className="btn btn-primary btn-hover-secondary"
                    onClick={() => navigate(`/${sub.attributes.name.toLowerCase()}`)}
                >
                Access
                </button>{' '}
                <button
                    className="btn toggle"
                    onClick={() => manageSubscriptions(jwt) }
                >
                Manage Subscription
                </button>
            </section>
            </ContainerStyle>
        ))
        ) : (
            <ThreeDotWave />
        )}
    </>
  );
}
