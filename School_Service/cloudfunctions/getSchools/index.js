// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')  //node界面的jquery
let charset = require('superagent-charset')   //解决乱码
let superagent = require('superagent')   //发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = ""
  let newsData = []
  if(event.currentTab === 0) {  //学校简介
    serverUrl = "https://www.ecut.edu.cn/2347/list.htm"
    const result = await superagent.get(serverUrl).charset('utf-8')
    const data = result.text || ''
    const $ = cheerio.load(data)
    let newsList = $('.paging_content').find('p')
    for(let i = 0; i < newsList.length; i++) {
      let obj = {}
      obj['detail'] = $(newsList[i]).find('span').text()
      if(obj['detail'] !== "") {
        newsData.push(obj)
      }
    }
  } else {  //学校领导
    serverUrl = "https://www.ecut.edu.cn/2352/list.htm"
    const result = await superagent.get(serverUrl).charset('utf-8')
    const data = result.text || ''
    const $ = cheerio.load(data)
    let newsList = $('.paging_content').find('p')
    for(let i = 0; i < newsList.length; i++) {
      let obj = {}
      obj['imgUrl'] = $(newsList[i]).find('img').attr('src')
      obj['title'] = $(newsList[i]).find('strong').text().trim().slice(0, 12);
      obj['detail'] = $(newsList[i]).find('span').text()
      if(obj['detail'].includes("党委常委、副校长：") || obj['detail'].includes("副校长：") 
      || obj['detail'].includes("党委副书记：") || obj['detail'].includes("党委副书记、校长：")) {
        obj['detail'] = ""
      }
      newsData.push(obj)
    }
  }

  return {
    newsData
  }
}