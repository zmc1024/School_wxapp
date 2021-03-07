// miniprogram/pages/Contents/swzlOnlyRead/swzlOnlyRead.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagNum: '',         // 寻物 0 / 招领 1
    perName: '',        // 发布人
    telPhone: '',       // 联系方式
    goodsName: '',      // 物品名称
    position: '',       // 地点
    goodsDesc: '',      // 物品描述
    goodsImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const { goodsdesc, goodsname, imgurl, pername, position, tagnum, telphone } = options;
    this.setData({
      tagNum: tagnum,
      perName: pername,
      telPhone: telphone,
      goodsName: goodsname,
      position: position,
      goodsDesc: goodsdesc,
      goodsImg: imgurl
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