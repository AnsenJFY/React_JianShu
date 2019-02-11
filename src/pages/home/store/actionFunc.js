import * as actionType from './actionType';
import { queryHomepageData, queryMoreArticle } from '../../../api';
import { fromJS } from 'immutable';


const changeHomeData = (result) => ({
  type: actionType.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const queryHomeData = () => {
  return (dispatch) => {
    queryHomepageData().then(res => {
      dispatch(changeHomeData(res.data.data));
    })
  }
}

const loadMoreArticle = (res,page) => ({
  type: actionType.LOAD_MORE_ARTICLE,
  articleList: fromJS(res),
  nextPage:page
})

export const queryMoreList = (page) => {
  return (dispatch) => {
    queryMoreArticle({
      page:page
    }).then(res => {
      console.log(res.data.data)
      dispatch(loadMoreArticle(res.data.data,page+1))
    })
  }
}

export const toggleScrollShow = (state) =>({
  type:actionType.TOGGLE_SCROLL_SHOW,
  state
})