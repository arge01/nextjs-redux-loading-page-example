/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import fetchConfig from '../../middleware/fetchConfig';

const findAll = (page) => fetchConfig('get', 'episode', `?page=${page}`);
const find = (id) => fetchConfig('get', 'episode/', id);

export const services = {
  findAll,
  find,
};
