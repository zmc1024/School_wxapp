// miniprogram/pages/Contents/marketOnlyRead/marketOnlyRead.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '',          // 联系方式类别
    perName: '',        // 发布人
    telPhone: '',       // 联系方式
    goodsName: '',      // 物品名称
    price: '',          // 售价
    tradeMode: '',      // 交易方式
    goodsDesc: '',      // 物品描述
    goodsImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goodsdesc, goodsname, imgurl, newprice, pername, radio, telphone, trademode } = options;
    this.setData({
      radio: radio,
      perName: pername,
      telPhone: telphone,
      goodsName: goodsname,
      price: newprice,
      tradeMode: trademode,
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