import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

/** 初次渲染首页数据 */
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}
/** 加载更多文章 */
const loadMoreArticle = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.articleList),
    articlePage: fromJS(action.nextPage)
  })
}

/** 回到顶部展示 */
const toggleScrollShow = (state, action) => {
  return state.set('showScroll', action.state)
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionType.LOAD_MORE_ARTICLE:
      return loadMoreArticle(state, action)
    case actionType.TOGGLE_SCROLL_SHOW:
      return toggleScrollShow(state, action)
    default:
      return state;
  }
}