/* eslint-disable camelcase */
// @ts-nocheck
/* eslint-disable prettier/prettier */
import axios from 'axios';

const rest_url = 'https://rickandmortyapi.com/api';

const fetchConfig = (method, url, data) => {
  const config = {
    method,
    url: `${rest_url}/${url}${data}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data && JSON.stringify(data),
  };
  return axios(config);
};

export default fetchConfig;
