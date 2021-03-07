// miniprogram/pages/CommonFunctions/School/School.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoStyle: "background-color: #00B26A",
    active: 0,
    currentTab: 0,
    newsData: []
  },

  // Tabs切换
  onTabChange(event) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getSchools',
      data: {
        currentTab: event.detail.index
      }
    }).then(res => {
      console.log(res);
      wx.hideLoading();
      const result = res.result || {}
      this.setData({
        newsData: result.newsData
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let event = {
      detail: {
        index: 0
      }
    }
    this.onTabChange(event)
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