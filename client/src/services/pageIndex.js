import Taro from "@tarojs/taro";
import { testDB } from "../app";

export const getPageIndexDate = () => {
  
  return testDB
    .collection("indexList")
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
  // return testDB
  //   .collection("pageIndex")
  //   .get()
  //   .then(res => {
  //     // res.data 包含该记录的数据
  //     return res;
  //   });
};
