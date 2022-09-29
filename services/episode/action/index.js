/* eslint-disable import/named */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { TYPES } from './type';
import { services } from '../index';
import reactReducerAction from '../../../middleware/reactReducerAction';

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
