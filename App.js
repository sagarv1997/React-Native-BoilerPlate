import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './src/store/reducers/counterReducer';
import HomeScreen from './HomeScreen';
import {ThemeProvider} from './src/context/ThemeContext';
import {LocalizationProvider} from './src/context/LocalizationContext';

const store = createStore(
  combineReducers({
    ctr: counterReducer,
  }),
  applyMiddleware(thunk),
);

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider>
        <ThemeProvider>
          <HomeScreen />
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
