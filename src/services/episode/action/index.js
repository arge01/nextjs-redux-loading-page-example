/* eslint-disable import/order */
import { services } from '../index';
import reactReducerAction from 'middleware/reactReducerAction';
import { TYPES } from './type';

export const findAll = (
  page,
  successCallback,
  errorCallback,
  warningCallback
) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.FINDALL,
      error: TYPES.ERROR,
    },
    () => services.findAll(page),
    successCallback,
    errorCallback,
    warningCallback,
    page
  );

export const find = (id, successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.FIND,
      error: TYPES.ERROR,
    },
    () => services.find(id),
    successCallback,
    errorCallback,
    warningCallback
  );
