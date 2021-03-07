// miniprogram/pages/CommonFunctions/News/News.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoStyle: "background-color: #FACD50",
    url: '',
    newsData: [],
    pagesData: [],
    pageArray:[],
    page: 1    //当前页
  },

  // 加载新闻
  getNews(url) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getNews',
      data: {
        url: url
      }
    }).then(res => {
      // console.log(res);
      wx.hideLoading();
      const result = res.result || {}
      this.setData({
        newsData: result.newsData,
        pagesData: result.pagesData,
        pageArray: result.pageArray
      })
    })
  },

  // 去看新闻
  navtoUrl(e) {
    // console.log(e);
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/Contents/newsContent/newsContent?url=${url}`
    })
  },

  // 首页
  homePage() {
    let that = this
    if(that.data.page > 1) {
      that.setData({
        page: 1
      })
      let url = `https://news.ecut.edu.cn/120/list1.htm`;
      this.getNews(url);
    } else {
      that.setData({
        page: 1
      })
      return
    }
  },

  // 上一页
  prePage() {
    let that = this
    if(that.data.page <= 1) {
      that.setData({
        page: 1
      })
      return
    }
    that.setData({
      page: --that.data.page
    })
    // console.log(that.data.page);
    let url = `https://news.ecut.edu.cn/120/list${that.data.page}.htm`;
    this.getNews(url);
  },

  // 跳页
  bindPickerchange(event) {
    // console.log(event);
    let that = this;
    let jumpPage = parseInt(event.detail.value) + 1;
    that.setData({
      page: jumpPage
    })
    let url = `https://news.ecut.edu.cn/120/list${jumpPage}.htm`;
    this.getNews(url);
  },

  // 下一页
  nextPage() {
    let that = this
    let lastPage = that.data.pagesData[0].allPages
    if(that.data.page == lastPage) {
      return
    }
    that.setData({
      page: ++that.data.page
    })
    // console.log(that.data.page, lastPage);
    let url = `https://news.ecut.edu.cn/120/list${that.data.page}.htm`;
    this.getNews(url);
  },

  // 尾页
  lastPage() {
    let that = this;
    let lastPage = that.data.pagesData[0].allPages
    if(that.data.page === lastPage) {
      return
    }
    that.setData({
      page: lastPage
    })
    let url = `https://news.ecut.edu.cn/120/list${that.data.page}.htm`;
    this.getNews(url);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = `https://news.ecut.edu.cn/120/list1.htm`;
    this.getNews(url);
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