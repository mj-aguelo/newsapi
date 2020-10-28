/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './store';
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
