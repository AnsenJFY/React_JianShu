
import { queryDetailContent } from '../../../api';
import * as actionType from './actionType';

export const changeDetial = (title, content) => ({
  type: actionType.GET_DETAIL_DATA,
  title,
  content
})

export const getDetailContent = () => {
  return (dispatch) => [
    queryDetailContent().then(res => {
      const data  = res.data.data;
      dispatch(changeDetial(data.title, data.content))
    })
  ]
}
