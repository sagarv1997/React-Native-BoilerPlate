import {themedColors} from '../../style/theme';
import {SWITCH_THEME} from '../actions/actionTypes';

const initialState = {
  theme: {...themedColors.light},
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: {...state.theme, ...themedColors[action.payload.baseTheme]},
      };
      return newState;
    default:
      return state;
  }
};

export default themeReducer;
