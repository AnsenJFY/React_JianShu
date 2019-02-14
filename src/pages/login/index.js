import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionFunc } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.account = input }} />
            <Input placeholder="密码" type="password" ref={(input) => { this.password = input }} />
            <Button onClick={() => this.props.handleLogin(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }

  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  handleLogin(account, password) {
    dispatch(actionFunc.requestLogin(account.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login);