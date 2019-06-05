import { testDB } from '../app';

export  const getPageIndexDate =()=>( testDB.collection('pageIndex').get().then(res => {
    // res.data 包含该记录的数据
    return res
  })
  )