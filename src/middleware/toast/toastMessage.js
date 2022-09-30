/* eslint-disable prettier/prettier */
import toastObjects from './index';

const toastMessage = (type) => toastObjects?.[type];

export default toastMessage;
