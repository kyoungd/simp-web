import axios from 'axios';

async function getSchedules(jwt) {
  const url = process.env.REACT_APP_SCHEDULE_SERVICE || 'http://localhost:1337/api/get-schedule';
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return result;
}

export { getSchedules };
