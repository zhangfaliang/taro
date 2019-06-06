// src/actions/counter.js
import { testDB } from '../app';
import {
    PAGE_INDEX_GET,
    PAGE_INDEX_SET,
    PAGE_INDEX_UPPER,
    PAGE_INDEX_LOWER
  } from '../constants/index.js'
  
  export const getData = () => {
    return {
      type: PAGE_INDEX_GET
    }
  }
  export const setData = (data) => {
    return {
      type: PAGE_INDEX_SET,
      data
    }
  }
  export const getDataUpper = () => {
    return {
      type: PAGE_INDEX_UPPER
    }
  }

  export const getDataLower = () => {
    return {
      type: PAGE_INDEX_LOWER
    }
  }

  