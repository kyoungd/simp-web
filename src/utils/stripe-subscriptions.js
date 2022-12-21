import axios from 'axios';

// export async function getPrices() {
//   const { data } = await axios.get('/prices');
//   data.forEach((price) => {
//     price.nickname = price.product.name;
//     return price;
//   });
//   console.log('prices get request', data);
//   return data;
// }

function makeBearToken(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

export async function getSubscriptions(token) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/get-subscriptions`;
  const { data } = await axios.get(url, makeBearToken(token));
  const subs = data.data;
  console.log('here', subs);
  return subs;
}

export async function getSubscriptionManagement(token) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/get-subscription-portal`;
  const { data } = await axios.get(url, makeBearToken(token));
  return data.data.attributes.url;
}
