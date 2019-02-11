import { actionType } from './';
import { searchItem } from '../../../api';
import { fromJS } from 'immutable'

const initSearchList = (searchList) => ({
  type: actionType.INIT_SEARCH_LIST,
  searchList:fromJS(searchList),
  totalPage:Math.ceil(searchList.length / 10)
})

export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
})

export const mouseEnter = () =>({
  type: actionType.MOUSE_ENTER
})

export const mouseLeave = () =>({
  type: actionType.MOUSE_LEAVE
})

export const searchChange = (page) =>({
  type:actionType.SEARCH_CHANGE,
  page
})

export const getSearchItem = () => {
  return (dispatch) => {
    searchItem().then(res => {
      const data = res.data.data;
      dispatch(initSearchList(data));
    }).catch(e => {
      console.log('数据请求失败');
    })
  }
}

