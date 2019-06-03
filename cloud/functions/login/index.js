const cloud = require('wx-server-sdk')

cloud.init({env:'chiji-test'})


exports.main = async () => {
  const wxContext = cloud.getWXContext()
  console.log(wxContext,'wxContext')
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}