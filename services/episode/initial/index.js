/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
export const model = {
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  created: '',
};

export const initialState = {
  loading: false,
  isSuccess: false,
  error: undefined,
  info: {},
  findAll: [],
  find: model,
  page: 1,
};
