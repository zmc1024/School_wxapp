// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')  //node界面的jquery
let charset = require('superagent-charset')   //解决乱码
let superagent = require('superagent')   //发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://www.ecut.edu.cn/2354/list.htm"
  const result = await superagent.get(serverUrl).charset('utf-8')   // 拿到页面的html结构
  const data = result.text || ''
  const $ = cheerio.load(data)

  let newsList = $('.paging_content').find('p')
  let newsData = []
  for(let i = 0; i < newsList.length; i++) {
    let obj = {}
    obj['detail'] = $(newsList[i]).find('span').find('span').text() || $(newsList[i]).find('span').text()
    if(obj['detail'] !== "") {
      newsData.push(obj)
    }
  }

  return {
    newsData
  }
}