// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')  //node界面的jquery
let charset = require('superagent-charset')   //解决乱码
let superagent = require('superagent')   //发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `${event.url}`
  const result = await superagent.get(serverUrl).charset('utf-8')   // 拿到页面的html结构
  const data = result.text || ''
  const $ = cheerio.load(data)

  // 获取院校详情
  let academyList = $('.paging_content').find('p') || $('.paging_content').find('h3');
  let academyData = []
  for(let i = 0; i < academyList.length; i++) {
    let obj = {}
    obj['title'] = $(academyList[i]).find('strong').find('span').text().trim();
    obj['desc'] = $(academyList[i]).text().trim();
    if(obj['title'] == "" && obj['desc'] !== "") {
      academyData.push(obj);
    }
  }

  return {
    academyData
  }
}