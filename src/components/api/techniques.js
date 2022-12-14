import axios from 'axios';
import StandarizeTechniques from './standardTechniques';

async function getTechniques(jwt) {
  const url = process.env.REACT_APP_TECHNIQUE_SERVICE || 'http://localhost:1337/api/techniques';
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  const jsondata = StandarizeTechniques(result.data.data);
  return jsondata;
}

export { getTechniques };
