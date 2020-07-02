import * as actionTypes from './actionTypes';

export const switchTheme = (baseTheme) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SWITCH_THEME,
      payload: {
        baseTheme,
      },
    });
  };
};
