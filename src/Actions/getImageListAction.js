import {
  IMAGE_LIST,
  IMAGE_LIST_LOADING,
} from '../utils/constants';

export const listImages = (images) => {
  return {
    type: IMAGE_LIST,
    payload: images,
  };
};

export const fetchDataRejected = (value) => {
  return {
    type: IMAGE_LIST_LOADING,
    payload: value,
  };
};
