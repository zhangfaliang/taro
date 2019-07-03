import { createSelector } from "reselect";
import { get } from "lodash";
const pageIndex = state => state.pageIndex;

export const makePageIndex = createSelector(
  pageIndex,
  pageIndex => {
    return pageIndex;
  }
);

export const makeLastPageNum = createSelector(
  pageIndex,
  pageIndex => {
    return get(pageIndex, "lastPageNum", 0);
  }
);
export const makeFeed = createSelector(
  pageIndex,
  pageIndex => {
    return {
      feed: get(pageIndex, "pageDate", []),
      feed_length: get(pageIndex, "pageDate", []).length
    };
  }
);

export const makeDetailData = createSelector(
  pageIndex,
  pageIndex => {
    return get(pageIndex, "index_detail", {});
  }
);
