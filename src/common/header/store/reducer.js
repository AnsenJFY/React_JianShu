import { actionType } from './';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    searchItemList:[]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionType.SEARCH_BLUR:
            return state.set('focused',false)
        case actionType.INIT_SEARCH_LIST:
            return state.set('searchItemList',action.searchList)
        default:
            break;
    }
    return state;
}