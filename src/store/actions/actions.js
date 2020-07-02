import * as actionTypes from './actionTypes';

// export const switchTheme = (baseTheme) => {
//   return (dispatch) => {
//     dispatch({
//       type: actionTypes.SWITCH_THEME,
//       payload: {
//         baseTheme,
//       },
//     });
//   };
// };

export const increment = (number) => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    payload: {
      number,
    },
  };
};

export const decrement = (number) => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    payload: {
      number,
    },
  };
};
