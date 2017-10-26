import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import Navigator from './modules/navigator/components/Navigator';

const store = configureStore({});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
