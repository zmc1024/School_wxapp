// miniprogram/pages/CommonFunctions/YuanXiao/YuanXiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoStyle: "background-color: #1296DB",
    grid: [
      {
        url: 'https://dkxy.ecut.edu.cn/6756/list.htm',
        academyName: '地球科学学院'
      },
      {
        url: 'https://sgmt.ecut.edu.cn/2687/list.htm',
        academyName: '地球物理与测控技术学院'
      },
      {
        url: 'https://shxy.ecut.edu.cn/880/list.htm',
        academyName: '水资源与环境工程学院'
      },
      {
        url: 'https://chgcxy.ecut.edu.cn/735/list.htm',
        academyName: '测绘工程学院'
      },
      {
        url: 'https://ccbm.ecut.edu.cn/819/list.htm',
        academyName: '化学生物与材料科学学院'
      },
      {
        url: 'https://snse.ecut.edu.cn/207/list.psp',
        academyName: '核科学与工程学院'
      },
      {
        url: 'https://jdxy.ecut.edu.cn/2089/list.htm',
        academyName: '机械与电子工程学院'
      },
      {
        url: 'https://ies.ecut.edu.cn/xyjj/list.htm',
        academyName: '信息工程学院'
      },
      {
        url: 'https://lxy.ecut.edu.cn/305/list.htm',
        academyName: '理学院'
      },
      {
        url: 'https://jzgc.ecut.edu.cn/475/list.htm',
        academyName: '土木与建筑工程学院'
      },
      {
        url: 'https://ses.ecut.edu.cn/xyjj/list.htm',
        academyName: '软件学院'
      },
      {
        url: 'https://sem.ecut.edu.cn/775/list.htm',
        academyName: '经济与管理学院'
      },
      {
        url: 'https://sll.ecut.edu.cn/xyjj/list.htm',
        academyName: '文法学院'
      },
      {
        url: 'https://wgyxy.ecut.edu.cn/xyjj/list.htm',
        academyName: '外国语学院'
      },
      {
        url: 'https://sfxy.ecut.edu.cn/374/list.htm',
        academyName: '抚州师范学院'
      },
      {
        url: 'https://marx.ecut.edu.cn/755/list.htm',
        academyName: '马克思主义学院'
      },
      {
        url: 'https://tyxy.ecut.edu.cn/2639/list.htm',
        academyName: '体育学院'
      },
      {
        url: 'https://ysxy.ecut.edu.cn/1011/list.htm',
        academyName: '艺术学院'
      },
      {
        url: 'https://hjxy.ecut.edu.cn/1530/list.htm',
        academyName: '国防教育学院'
      },
      {
        url: 'https://cxcy.ecut.edu.cn/9a/11/c4128a39441/page.htm',
        academyName: '创新创业教育学院'
      },
      {
        url: 'https://cjc.ecut.edu.cn/1572/list.htm',
        academyName: '东华理工大学长江学院'
      },
      {
        url: 'https://gzxy.ecut.edu.cn/1586/list.htm',
        academyName: '高等职业技术学院'
      },
      {
        url: 'https://jxjy.ecut.edu.cn/3494/main.htm',
        academyName: '继续教育学院'
      },
      {
        url: 'https://is.ecut.edu.cn/855/list.htm',
        academyName: '国际教育学院'
      },
      {
        url: 'https://mpacc.ecut.edu.cn/xyjj/list.htm',
        academyName: 'MPAcc 教育中心'
      },
    ]
  },

  // 院校跳转
  navtoUrl(e) {
    // console.log(e);
    let url = e.currentTarget.dataset.url;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/Contents/academyContent/academyContent?url=${url}&name=${name}`
    })
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