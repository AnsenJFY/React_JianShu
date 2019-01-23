import { actionType } from './';
import { searchItem } from '../../../api';
import { fromJS } from 'immutable'


export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
})
export const initSearchList = (searchList) => ({
  type: actionType.INIT_SEARCH_LIST,
  searchList:fromJS(searchList)
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

