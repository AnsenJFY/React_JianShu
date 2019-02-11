import { actionType } from './';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn:false,
  searchItemList: [],
  page:0,
  totalPage:0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionType.SEARCH_BLUR:
      return state.set('focused', false)
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionType.SEARCH_CHANGE:
      console.log(state)
      return state.set('page', action.page)
    case actionType.INIT_SEARCH_LIST:
      return state.merge({
        searchItemList:action.searchList,
        totalPage:action.totalPage
      })
    default:
      break;
  }
  return state;
}