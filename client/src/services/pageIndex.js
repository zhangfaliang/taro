import { testDB } from '../app';

export  const getPageIndexDate =()=>( testDB.collection('pageIndex').get().then((res)=>{
    return res
 }))