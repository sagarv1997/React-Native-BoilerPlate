import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import themeReducer from './src/store/reducers/themeReducer';
import AppContext from './src/context/AppContext';

const store = createStore(
  combineReducers({themeReducer}),
  applyMiddleware(thunk),
);

const App = () => {
  return (
    <Provider store={store}>
      <AppContext />
    </Provider>
  );
};

export default App;
