// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')  //node界面的jquery
let charset = require('superagent-charset')   //解决乱码
let superagent = require('superagent')   //发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://news.ecut.edu.cn/${event.url}`
  const result = await superagent.get(serverUrl).charset('utf-8')   // 拿到页面的html结构
  const data = result.text || ''
  const $ = cheerio.load(data)

  // 获取新闻详情
  let newsTitle = {}
  let newsTitleData = []
  newsTitle['title'] = $('.arti_title').find('span').text();
  newsTitle['count'] = $('.arti_metas').find('span').text();
  newsTitleData.push(newsTitle)

  let newsContent = $('.wp_articlecontent').find('p');
  let newsContentData = []
  for(let i = 0; i < newsContent.length; i++) {
    let obj = {}
    obj['desc'] = $(newsContent[i]).text().trim();
    obj['img'] = $(newsContent[i]).find('img').attr('src');
    if(obj['desc'] !=="" || obj['img']) {
      newsContentData.push(obj);
    }
  }

  return {
    newsTitleData,
    newsContentData
  }
}