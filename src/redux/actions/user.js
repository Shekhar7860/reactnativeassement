import * as actionTypes from './actionTypes';

export const setName = (name) => {
    return {
      type: actionTypes.NAME,
      name
    }
  };