// src/actions/counter.js
import { testDB } from '../app';
import {
    PAGE_INDEX_GET,
    PAGE_INDEX_SET
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
  

  