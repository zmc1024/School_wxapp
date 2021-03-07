// miniprogram/pages/Contents/PersonContent/PersonContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    personInfo: [
      {
        id: 1,
        msg: '姓名',
        val: '钟名聪'
      },
      {
        id: 2,
        msg: '学号',
        val: '201720181703'
      },
      {
        id: 3,
        msg: '性别',
        val: '男'
      },
      {
        id: 4,
        msg: '学院',
        val: '软件学院'
      },
      {
        id: 5,
        msg: '年级',
        val: '2017级'
      },
      {
        id: 6,
        msg: '专业',
        val: '软件工程'
      },
      {
        id: 7,
        msg: '班级',
        val: '1721801Z班'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let { avatarUrl } = options;
    this.setData({
      avatarUrl: avatarUrl
    })
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