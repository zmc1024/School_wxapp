// miniprogram/pages/my/my.js

// 将app.js的全局对象引入
const app =  getApp();
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: '',
    hasUserInfo: false,
    iconArrow: 'arrow',
    introduce: [
      {
        id: 1,
        name: '公告',
        color: '#9E8DE2',
        iconName: 'volume-o'
      },
      {
        id: 2,
        name: '日志',
        color: '#73B3ED',
        iconName: 'wap-nav'
      },
      {
        id: 3,
        name: '赞赏',
        color: '#DC8EAE',
        iconName: 'gold-coin-o'
      },
      {
        id: 4,
        name: '反馈',
        color: '#7BCEA6',
        iconName: 'sign'
      },
      {
        id: 5,
        name: '关于',
        color: '#79B3E5',
        iconName: 'warning-o'
      },
      {
        id: 6,
        name: '分享',
        color: '#E68AAF',
        iconName: 'share-o'
      },
    ]
  },

  // 获取用户信息
  onGetUserInfo(e) {
    // console.log(e);
    // console.log(app);
    if(e.detail.userInfo) {
      wx.cloud.callFunction({
        name:'getOpenId',
      }).then(res => {
        app.globalData.openId = res.result.openid
      })
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    // console.log(app.globalData);
  },

  // 去个人信息页面
  navtoPInfo(e) {
    const that = this
    if(that.data.hasUserInfo) {
      console.log(e);
      let avatarUrl = e.currentTarget.dataset.avatarurl
      wx.navigateTo({
        url: `/pages/Contents/PersonContent/PersonContent?avatarUrl=${avatarUrl}`
      })
    }
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