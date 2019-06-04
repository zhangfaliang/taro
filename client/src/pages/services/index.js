import Taro, { Component } from "@tarojs/taro";
const db = Taro.cloud.database();
// const todos = db.collection('todos')
const todo = db.collection('todos').doc('1c4318c9-cc93-494c-adea-741d1cf1d2ef').get({
  success: function(res) {
    // res.data 包含该记录的数据
    console.log(res.data)
  }
})

export const getIndex =  ()=>{
    DB.collection('pageIndex').get().then(res => {
        // res.data 包含该记录的数据
        return  res.data
      })
}