import { PAGE_INDEX_GET, PAGE_INDEX_SET } from '../constants/index'

const INITIAL_STATE = {
  pageDate: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGE_INDEX_SET:
      return {
        ...state,
        pageDate:[...state.pageDate,...action.data]
      }
    case PAGE_INDEX_GET:
      return {
        ...state,
        pageDate: []
      }
    default:
      return state
    }
}