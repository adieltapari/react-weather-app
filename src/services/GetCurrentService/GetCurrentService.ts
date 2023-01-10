import axios from 'axios';
import config from 'services/config';

class GetCurrentService {
  getOneCurrentCity = (city) => {
    return axios
      .get(`${config.SERVER_URI}/api/v1/current?city=${city}`)
      .then((response) => response.data);
  };
  getIpCurrent = () => {
    return axios
      .get(`${config.SERVER_URI}/api/v1/current`)
      .then((response) => response.data);
  };
}

export default GetCurrentService;
