// miniprogram/pages/CommonFunctions/secondMarket/secondMarket.js
const db = wx.cloud.database()  // 调用云函数库
const app = getApp();   //调用全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    marketData: [],
    userId: '',
  },

  // 跳转发布页面
  navigaToPage() {
    let that = this;
    let nickName = that.data.nickName;
    let avatarUrl = that.data.avatarUrl;
    wx.navigateTo({
      url: `/pages/Contents/marketContent/marketContent?nickName=${nickName}&avatarUrl=${avatarUrl}`
    })
  },

  // 连接数据库查询发布数据
  getgoodsFound() {
    db.collection('secondMarket').orderBy('dateNow','desc').get().then(res => {
      // console.log(res);
      const data = res.data || []
      this.setData({
        marketData: data
      })
      // console.log(this.data.marketData);
    })
  },

  // 去详情
  goBackContent(e) {
    // console.log(e);
    const { goodsdesc, goodsname, imgurl, newprice, pername, radio, telphone, trademode } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/Contents/marketOnlyRead/marketOnlyRead?goodsdesc=${goodsdesc}
        &goodsname=${goodsname}&imgurl=${imgurl}&newprice=${newprice}&pername=${pername}&radio=${radio}
        &telphone=${telphone}&trademode=${trademode}`
    })
  },

  // 删除留言
  delete(e) {
    // console.log(e);
    const id = e.currentTarget.dataset.id;
    db.collection('secondMarket').doc(id).remove().then(res => {
      // console.log(res);
      if(res.stats.removed == 1) {
        wx.showToast({
          icon: 'success',
          title: '删除成功',
        },1500)
      }
      this.getgoodsFound();
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
        avatarUrl,
        userId: app.globalData.openId
      })
      this.getgoodsFound();
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