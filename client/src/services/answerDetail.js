import { testDB } from '../app';

export  const getAnswerDetail =(answer_id)=>( testDB.collection('anwserDetail').where({
    answer_id: answer_id,
  }).get().then(res => {
    // res.data 包含该记录的数据

    console.log( res.data,'1111111111111111111111111111')
    return res.data
  })
  )
