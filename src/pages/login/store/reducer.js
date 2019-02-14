import * as actionType from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login:false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LOGIN_STATE:
      return state.set('login',fromJS(action.state))
    case actionType.LOGOUT:
      return state.set('login',fromJS(action.state))
    default:
      return state
  }
}