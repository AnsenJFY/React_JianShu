import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import {GlobalIconFont} from './statics/icon/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont/>
        <Provider store={store}>
          <Fragment>
            <Header/>
            <BrowserRouter>
              <Fragment>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail }></Route>
              </Fragment>
            </BrowserRouter>
          </Fragment>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
