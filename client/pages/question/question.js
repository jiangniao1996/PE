// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textdata: "",
    id:1,
    list:[
      {id:1,answer:true},
      {id:2,answer:false},
      {id:3,answer:true},
    ],

    score:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({textdata:options.str})
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
  
  },

  /**
   * 下一道题按钮函数
   */
  nextquestion: function(){
    var that = this;
    that.data.id = that.data.id+1;
    wx.request({
      url: 'http://192.168.0.108:8080/wechat/startanswer.php',
      data: {id : that.data.id},
      method: "POST",
      header: { 'content-type': 'application/x-www-form-urlencoded'},

      success:function(res){
          console.log(res);
          that.setData({textdata:res.data});
          
      },
      failed:function(err){
          console.log(err);
      }
    })
  },


  /**
   * 结束答题按钮
   */
  finishanswer: function(){
    var that = this;
    wx.request({
      url: 'http://192.168.0.108:8080/wechat/checkanswer.php',
      data: { qna:that.data.list },
      method: "GET",

      success:function(res){
          console.log(res.data);
      },
      failed:function(err){
        console.log(err);
      }
    })
  }
})