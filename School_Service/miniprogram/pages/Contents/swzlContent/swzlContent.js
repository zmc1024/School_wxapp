// miniprogram/pages/Contents/swzlContent/swzlContent.js
const db = wx.cloud.database()  // 调用云函数库
const app = getApp();   //调用全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',      // 头像
    tagNum: 0,          // 寻物 0 / 招领 1
    perName: '',        // 发布人
    telPhone: '',       // 联系方式
    goodsName: '',      // 物品名称
    position: '',       // 地点
    goodsDesc: '',      // 物品描述
    fileList: []        // 文件
  },

  // 上传预览图片
  afterRead(event) {
    const { file, index, name } = event.detail
    const { fileList = [] } = this.data.fileList;
    fileList.push({ url: file.url, index: index });
    this.setData({ fileList });
  },

  // 删除图片
  deleteImg(event) {
    this.setData({
      fileList: []
    })
  },

  nameChange(event) {   // 发布人
    this.setData({
      perName: event.detail
    })
  },
  phoneChange (event){  // 联系方式
    this.setData({
      telPhone: event.detail
    })
  },
  goodsChange (event){  // 物品名称
    this.setData({
      goodsName: event.detail
    })
  },
  posiChange (event){  // 地点
    this.setData({
      position: event.detail
    })
  },
  goodsDescChange (event){  // 物品描述
    this.setData({
      goodsDesc: event.detail
    })
  },

  // 发布
  publish(event) {
    if(this.data.telPhone == "" || this.data.goodsName == "" || this.data.fileList.length <= 0) {
      wx.showToast({
        icon: 'none',
        title: '请输入联系方式、物品名称、上传图片',
        duration: 1500
      })
    } else {
      db.collection('goodsFound').add({   //.add往数据库添加数据
        data: {
          userId: app.globalData.openid,
          itemId: Math.random().toString(36).substr(3,3) + Date.now().toString(36),
          dateNow: new Date().format("yyyy-MM-dd hh:mm:ss"),
          tagNum: this.data.tagNum,
          perName: this.data.perName,
          avatarUrl: this.data.avatarUrl,
          telPhone: this.data.telPhone,
          goodsName: this.data.goodsName,
          position: this.data.position,
          goodsDesc: this.data.goodsDesc,
          imgUrl: this.data.fileList[0].url
        }
      }).then(res => {
        // console.log(res);
        wx.showToast({
          icon: 'success',
          title: '发布成功',
          success: function() {
            setTimeout(function() {
              wx.navigateBack({
                delta: 1
              })
            },1500)
          }
        },1500)
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const { activeTag, nickName, avatarUrl } = options
    this.setData({
      tagNum: activeTag,
      perName: nickName,
      avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 格式化日期
    Date.prototype.format = function(fmt) { 
      var o = { 
         "M+" : this.getMonth()+1,                 //月份 
         "d+" : this.getDate(),                    //日 
         "h+" : this.getHours(),                   //小时 
         "m+" : this.getMinutes(),                 //分 
         "s+" : this.getSeconds(),                 //秒 
         "q+" : Math.floor((this.getMonth()+3)/3), //季度 
         "S"  : this.getMilliseconds()             //毫秒 
      }; 
      if(/(y+)/.test(fmt)) {
              fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
      }
        for(var k in o) {
          if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
      return fmt; 
    }
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