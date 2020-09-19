import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import Home from '../Screens/Home';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default App;
