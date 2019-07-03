// src/actions/counter.js
import {
  PAGE_INDEX_GET,
  PAGE_INDEX_SET,
  PAGE_INDEX_UPPER,
  PAGE_INDEX_LOWER,
  PAGE_INDEX_CLEAR,
  PAGE_INDEX_DETAIL_SET,
  API_LAST_PAGE_NUM
} from "../constants/index.js";

export const getData = pageNum => {
  return {
    type: PAGE_INDEX_GET,
    pageNum
  };
};
export const setData = data => {
  return {
    type: PAGE_INDEX_SET,
    data
  };
};
export const getDataUpper = pageNum => {
  return {
    type: PAGE_INDEX_UPPER,
    pageNum
  };
};

export const getDataLower = pageNum => {
  return {
    type: PAGE_INDEX_LOWER,
    pageNum
  };
};

export const setPageIndexDetail = detailData => {
  return {
    type: PAGE_INDEX_DETAIL_SET,
    detailData
  };
};
export const setLastPageNum = lastPageNum => {
  return {
    type: API_LAST_PAGE_NUM,
    lastPageNum
  };
};

export const clearData = () => {
  return {
    type: PAGE_INDEX_CLEAR
  };
};
