import { createSelector } from 'reselect'
import { get} from 'lodash';
const pageIndex = (state) => state.pageIndex

export const makePageIndex = createSelector(
    pageIndex,
  (pageIndex) => {
     return pageIndex
  }
)
export const makeFeed = createSelector(
    pageIndex,
  (pageIndex) => {
     return {
        feed: get(pageIndex,'data',[]),
        feed_length:  get(pageIndex,'data',[]).length 
     }
  }
)


