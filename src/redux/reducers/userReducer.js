import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type){
      case actionTypes.NAME:
      return {
        ...state,
        name : action.name
      };
      default:
            return state;
    }
  };