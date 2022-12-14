import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Box, Typography, Grid } from '@mui/material';
import PaymentPopup from './PaymentPopup';

ExpertHeader.propTypes = {
  techn: PropTypes.object,
  token: PropTypes.string,
  expert: PropTypes.object
};

export default function ExpertHeader({ techn, token, expert }) {
  const isSubscribed = expert.sales.access === 'paid' && expert.sales.status === 'active';
  const isFree = expert.sales.access === 'free';
  const isOnSales = expert.sales.priceSale > 0;
  const price = isOnSales ? expert.sales.priceSale : expert.sales.price;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ minWidth: 160 }} mx={{ minWidth: 240 }}>
          <Avatar
            alt="Expert Photo"
            src={expert.person.image}
            sx={{
              width: 160,
              height: 160
            }}
            mx={{
              width: 240,
              height: 240
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {expert.person.name}{' '}
            </Typography>
            <Typography paragrah sx={{ mb: 2 }}>
              {expert.person.description}{' '}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {isFree && 'Free'}
              {!isSubscribed && !isFree && `$${price}`}{' '}
            </Typography>
            <Typography paragrah sx={{ mb: 2 }}>
              {isSubscribed && (
                <Button variant="outlined" color="primary">
                  Subscribed
                </Button>
              )}
              {isFree && (
                <Button variant="outlined" color="primary">
                  Free
                </Button>
              )}
              {!isSubscribed && !isFree && (
                <PaymentPopup priceId={techn.stripePriceId} token={token} />
              )}{' '}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
