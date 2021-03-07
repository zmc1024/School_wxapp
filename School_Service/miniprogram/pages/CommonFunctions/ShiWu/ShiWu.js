// miniprogram/pages/CommonFunctions/ShiWu/ShiWu.js
const db = wx.cloud.database()  // 调用云函数库
const app = getApp();   //调用全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,        // 切换tag
    nickName: '',
    avatarUrl: '',
    swzlData: []      // 发布的失物招领数据
  },

  onTabChange(event) {    // 切换tag
    let that = this;
    that.setData({
      active: event.detail.index
    })
    this.getgoodsFound(event.detail.index)
  },

  // 跳转发布页面
  navigaToPage() {
    let that = this;
    let activeTag = that.data.active;
    let nickName = that.data.nickName;
    let avatarUrl = that.data.avatarUrl;
    wx.navigateTo({
      url: `/pages/Contents/swzlContent/swzlContent?activeTag=${activeTag}&nickName=${nickName}&avatarUrl=${avatarUrl}`
    })
  },

  // 连接数据库查询发布数据
  getgoodsFound(num) {
    let tagNum = num || 0;
    let tagString = tagNum.toString()
    db.collection('goodsFound').orderBy('dateNow','desc').where({
      tagNum: tagString
    }).get().then(res => {
      // console.log(res);
      const data = res.data || []
      this.setData({
        swzlData: data
      })
      // console.log(this.data.swzlData);
    })
  },

  // 去详情
  goBackContent(e) {
    // console.log(e);
    const { goodsdesc, goodsname, imgurl, pername, position, tagnum, telphone } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/Contents/swzlOnlyRead/swzlOnlyRead?goodsdesc=${goodsdesc}
        &goodsname=${goodsname}&imgurl=${imgurl}&pername=${pername}&position=${position}&tagnum=${tagnum}&telphone=${telphone}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(JSON.stringify(app.globalData) === '{}') {   // 未登录
      wx.showToast({
        icon: 'error',
        title: '请先登录',
        complete: function() {
          setTimeout(function() {
            wx.navigateBack({
              delta: 1
            })
          },1000)
        }
      },2000)
    } else {
      const { nickName, avatarUrl } = app.globalData.userInfo
      this.setData({
        nickName,
        avatarUrl
      })
      this.getgoodsFound(0)
    }
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