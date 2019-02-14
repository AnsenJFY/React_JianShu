import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalIconFont } from './statics/icon/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store';
// import {Router as router} from './router'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont />
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header />
              {/* {
                router.map(item=>{
                  return <Route path={item.path} component={item.component}></Route>
                })
              } */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
