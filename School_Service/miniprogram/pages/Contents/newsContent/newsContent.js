// miniprogram/pages/Contents/newsContent/newsContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoStyle: "background-color: #FACD50",
    url: '',
    newsTitleData: [],
    newsContentData: []
  },

  // 读取新闻具体内容
  getNewsContent(url) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getNewsContent',
      data: {
        url: url
      }
    }).then(res => {
      // console.log(res);
      wx.hideLoading();
      const result = res.result || {}
      this.setData({
        newsTitleData: result.newsTitleData,
        newsContentData: result.newsContentData
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { url } = options;
    this.setData({
      url
    })
    this.getNewsContent(url);
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