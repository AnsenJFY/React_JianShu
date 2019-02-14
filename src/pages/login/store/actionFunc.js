import * as actionType from './actionType';
import { login } from '../../../api';

const loginData = (state) =>({
  type:actionType.CHANGE_LOGIN_STATE,
  state
})

export const logout = () =>({
  type:actionType.LOGOUT,
  state:false
})

export const requestLogin = (account, password) => (
  (dispatch) => {
    login({
      account,
      password
    }).then(res => {
      const {data} = res.data;
      if(data){
        dispatch(loginData(data))
      }else{
        alert('密码错误')
      }
    })
  }
)
