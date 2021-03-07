// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')  //node界面的jquery
let charset = require('superagent-charset')   //解决乱码
let superagent = require('superagent')   //发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = event.url;
  const result = await superagent.get(serverUrl).charset('utf-8')   // 拿到页面的html结构
  const data = result.text || ''
  const $ = cheerio.load(data)

  // 查找新闻数据
  let newsList = $('.wp_article_list').find('li')
  let newsData = []
  for(let i = 0; i < newsList.length; i++) {
    let obj = {}
    obj['url'] = $(newsList[i]).find('.Article_Title').find('a').attr('href');
    obj['newsTitle'] = $(newsList[i]).find('.Article_Title').find('a').text();
    obj['newsTime'] = $(newsList[i]).find('.Article_PublishDate').text();
    newsData.push(obj)
  }

  // 分页依据
  let pages = {}
  let pagesData = []
  // pages['count'] = $('.pages_count').find('.per_count').text();     // 每页多少条
  // pages['allCount'] = $('.pages_count').find('.all_count').find('em').text();  // 总共多少条
  pages['allPages'] = $('.page_jump').find('.pages').find('.all_pages').text(); // 总页数
  pagesData.push(pages)

  let pageArray = []
  for (let j = 0; j < pages['allPages']; j++){
    let obj = {};
    obj['num'] = j + 1;
    pageArray.push(obj);
  }

  return {
    newsData,
    pagesData,
    pageArray
  }
}