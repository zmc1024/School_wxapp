// miniprogram/pages/Contents/messageWall/messageWall.js
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
      { text: '请选择分类', value: 0 },
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
    title: ['0', '求助', '吐槽', '表白墙', '卖室友', '音乐节', '拼车出行', '游戏组队', '旅游出行', '其他'],
    ideaDescript: '',     // 描述
    fileList: [],         // 照片
  },

  // 选择变化
  onChange(event) {       
    this.setData({
      value1: event.detail
    })
  },

  // 描述内容
  ideaChange (event){     
    this.setData({
      ideaDescript: event.detail
    })
  },

  // 上传预览图片
  afterRead(event) {
    this.setData({
      fileList: []
    })
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

  // 发表
  publish(event) {
    if(this.data.value1 == 0 || this.data.ideaDescript == '') {
      wx.showToast({
        icon: 'none',
        title: '请选择分类并且内容不能为空',
        duration: 1500
      })
    } else {
      db.collection('ideaContents').add({
        data: {
          userId: app.globalData.openid,
          itemId: Math.random().toString(36).substr(3,3) + Date.now().toString(36),
          dateNow: new Date().format("yyyy-MM-dd hh:mm:ss"),
          nickName: this.data.nickName,
          avatarUrl: this.data.avatarUrl,
          cateId: this.data.value1,
          title: this.data.title[this.data.value1],
          ideaDescript: this.data.ideaDescript,
          imgUrl: this.data.fileList
        }
      }).then(res => {
        // console.log(res);
        wx.showToast({
          icon: 'success',
          title: '发表成功',
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
    const { nickName, avatarUrl } = options;
    this.setData({
      nickName,
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