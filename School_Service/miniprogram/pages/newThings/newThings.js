// miniprogram/pages/newThings/newThings.js
const db = wx.cloud.database()  // 调用云函数库
const app = getApp();   //调用全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',    // 用户名
    avatarUrl: '',   // 头像
    option1: [
      { text: '全部类别', value: 0 },
      { text: '求助', value: 1 },
      { text: '吐槽', value: 2 },
      { text: '表白墙', value: 3 },
      { text: '卖室友', value: 4 },
      { text: '音乐节', value: 5 },
      { text: '拼车出行', value: 6 },
      { text: '游戏组队', value: 7 },
      { text: '旅游出行', value: 8 },
      { text: '其他', value: 9 }
    ],
    value1: 0,
    ideaData: [],
    userId: '',
  },

  // 跳转去留言页面
  navigaToPage() {
    if(JSON.stringify(app.globalData) === '{}') {   // 未登录
      wx.showToast({
        icon: 'error',
        title: '请先登录',
      },2000)
    } else {
      const { nickName, avatarUrl } = app.globalData.userInfo
      this.setData({
        nickName,
        avatarUrl
      })
      wx.navigateTo({
        url: `/pages/Contents/messageWall/messageWall?nickName=${nickName}&avatarUrl=${avatarUrl}`
      })
    }
  },

  // 切换状态栏
  onChange(event) {
    const num = event.detail;
    this.setData({
      userId: app.globalData.openId
    })
    this.getIdeaContents(num);
  },

  // 获取数据库数据
  getIdeaContents(num) {
    let tagNum = num || 0;
    if(tagNum == 0) {
      db.collection('ideaContents').orderBy('dateNow','desc').get().then(res => {
        // console.log(res);
        const data = res.data || []
        this.setData({
          ideaData: data
        })
        // console.log(this.data.ideaData);
      })
    } else {
      db.collection('ideaContents').orderBy('dateNow','desc').where({
        cateId: tagNum
      }).get().then(res => {
        // console.log(res);
        const data = res.data || []
        this.setData({
          ideaData: data
        })
        // console.log(this.data.ideaData);
      })
    }
  },

  // 删除留言
  delete(e) {
    // console.log(e);
    const id = e.currentTarget.dataset.id;
    db.collection('ideaContents').doc(id).remove().then(res => {
      // console.log(res);
      if(res.stats.removed == 1) {
        wx.showToast({
          icon: 'success',
          title: '删除成功',
        },1500)
      }
      this.getIdeaContents(0)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.openId);
    this.setData({
      userId: app.globalData.openId
    })
    this.getIdeaContents(0);
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