// pages/shopnew/shopnew.js
Page({
  getMsg(){
    if (this.data.hasMore == false) return;
    var id=this.data.index_list_id;
    var pno = this.data.pageIndex + 1;
    var pageSize = this.data.pageSize;    
    wx.request({
      url: 'http://127.0.0.1:3000/shopNew',
      data: { pno: pno, pageSize: pageSize,index_list_id:id},
      success: (res) => {       
        var rows = this.data.list.concat(res.data.data);
        var pageCount = res.data.pageCount;
        var flag = pno < pageCount;
        this.setData({
          list: rows,
          pageIndex: pno,
          hasMore: flag
        })
        wx.showLoading({
          title: '正在加载中...',
        })
        setTimeout(function () {
          wx.hideLoading();
        }, 500)
      }
    })
  },
  getMore(event){
    var cid = event.target.dataset.cid;
    console.log(cid)
    if (!cid) { cid= this.data.isChange }
    if (cid != this.data.cid) {
      this.setData({
        pageIndex: 0,
        list: [],
        hasMore: true
      })
    }
    if (this.data.hasMore == false) return;
    var pno = this.data.pageIndex + 1;
    var pageSize = this.data.pageSize;    
    wx.request({
      url: 'http://127.0.0.1:3000/shopNew',
      data: { pno: pno, pageSize: pageSize,index_list_id:cid },
      success: (res) => {
        console.log(res)
        var rows = this.data.list.concat(res.data.data);
        var pageCount = res.data.pageCount;
        var flag = pno < pageCount;
        this.setData({
          list: rows,
          pageIndex: pno,
          hasMore: flag,
          isChange: cid          
        })
        wx.showLoading({
          title: '正在加载中...',
        })
        setTimeout(function () {
          wx.hideLoading();
        }, 500)
      }
    })
  },
  handle(event){
    var  tid=event.target.dataset.tid;
    wx.navigateTo({
      url: '/pages/shopinfo/shopinfo?tid='+tid,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    index_list_id:'',
    list:[],
    pageIndex:0,
    pageSize:2,
    hasMore:true,
    isChange:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index_list_id:this.options.id
    });
    this.getMsg();
    
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
    this.getMsg();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})