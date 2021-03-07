// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: '2500',
    duration: '800',
    imgUrl: [
      '/images/swiper/school1.jpg',
      '/images/swiper/school2.jpeg',
      '/images/swiper/school3.jpg'
    ],

    tips1: '常用功能',
    tips2: '考试查询',
    tips3: '更多功能',
    grid: [
      {
        id: 1,
        url: '/pages/CommonFunctions/School/School',
        image: '/images/services/school.png',
        title: '学校简介'
      },
      {
        id: 2,
        url: '/pages/CommonFunctions/YuanXiao/YuanXiao',
        image: '/images/services/mulu.png',
        title: '院校简介'
      },
      {
        id: 3,
        url: '/pages/CommonFunctions/News/News',
        image: '/images/services/news.png',
        title: '校园新闻'
      },
      {
        id: 4,
        url: '/pages/CommonFunctions/Score/Score',
        image: '/images/services/chengJi.png',
        title: '成绩查询'
      },
      {
        id: 5,
        url: '/pages/CommonFunctions/ShiWu/ShiWu',
        image: '/images/services/shiWu.png',
        title: '失物招领'
      },
      {
        id: 6,
        url: '/pages/CommonFunctions/secondMarket/secondMarket',
        image: '/images/services/erShou2.png',
        title: '二手集市'
      },
      {
        id: 7,
        url: '/pages/CommonFunctions/schoolCalendar/schoolCalendar',
        image: '/images/services/xiaoli.png',
        title: '校历'
      },
      {
        id: 8,
        url: '/pages/CommonFunctions/JiaoTong/JiaoTong',
        image: '/images/services/jiaotong.png',
        title: '交通指南'
      }
    ],
    exam: [
      {
        id: 1,
        url: '/pages/examQuery/examCET/examCET',
        image: '/images/services/cet.png',
        title: '四六级成绩'
      },
      {
        id: 2,
        url: '/pages/examQuery/examChinese/examChinese',
        image: '/images/services/chinese.png',
        title: '普通话成绩'
      },
      {
        id: 3,
        url: '/pages/examQuery/examComputer/examComputer',
        image: '/images/services/computer.png',
        title: '计算机成绩'
      },
      {
        id: 4,
        url: '/pages/examQuery/examTeacher/examTeacher',
        image: '/images/services/teacher.png',
        title: '教资成绩'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})