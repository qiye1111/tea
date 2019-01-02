//index.js
//获取应用实例
const app = getApp()

Page({
  handle(event){
    console.log(event)
    var id=event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/shopnew/shopnew?id='+id,
    });    
  },
  getSwiper(){
    wx.request({
      url: 'http://127.0.0.1:3000/image',
      success:(res)=>{        
        this.setData({
          list:res.data
        })
      }
    })
  },
  getList(){
    wx.request({
      url: 'http://127.0.0.1:3000/imageList',
      success:(res)=>{
        console.log(res)
        this.setData({
          arr:res.data
        })
      }
    })
  },
  getCart() {
    var uid = 1;
    wx.request({
      url: 'http://127.0.0.1:3000/cart',
      data: { uid: uid },
      success: (res) => {
        wx.setStorageSync('cart',res.data)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper();
    this.getList();
    this.getCart();
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