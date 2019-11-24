import Taro from "@tarojs/taro";
import { get } from "lodash";
import { testDB } from "../app";
import { processRes, replaceReg } from "../utils/processRes";
export const getPageIndexDate = pageNum => {
  return testDB
    .collection("requestUrl")
    .get()
    .then(res => {
      const { reqURL, params, header } = get(res, "data.0", {});
      return Taro.request({
        url: reqURL,
        data: {
          ...params,
          page: pageNum || 0,
          openApp: pageNum || 0
        },
        header: {
          ...header
        }
      }).then(res => {
        return JSON.parse(processRes(get(res, "data")));
      });
    });
};

export const getIndexAdvertising = pageNum => {
  return testDB
    .collection("indexAdvertising")
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
};