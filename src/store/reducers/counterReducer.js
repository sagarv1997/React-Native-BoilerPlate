import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/actionTypes';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.number,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload.number,
      };
    default:
      return state;
  }
};

export default counterReducer;
