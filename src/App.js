import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import Header from './common/header'
import { GlobalStyle } from './style';
import {GlobalIconFont} from './statics/icon/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont/>
        <Provider store={store}>
          <Header/>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
