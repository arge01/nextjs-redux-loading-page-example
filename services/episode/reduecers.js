/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
/* eslint-disable default-param-last */
import { initialState } from './initial';
import { TYPES } from './action/type';

export default (state = initialState, { type, payload, nextData }) => {
  switch (type) {
    case TYPES.PENDING:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };

    case TYPES.FINDALL:
      return {
        ...state,
        isSuccess: true,
        loading: false,
        error: undefined,
        info: payload?.info,
        findAll: payload?.results,
        page: nextData,
      };

    case TYPES.FIND:
      return {
        ...state,
        isSuccess: true,
        loading: false,
        error: undefined,
        find: payload,
      };

    case TYPES.ERROR:
      return {
        ...state,
        isSuccess: false,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
