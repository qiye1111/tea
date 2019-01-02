// pages/list/list.js
Page({
  getMsg(event){    
    var sel = event.target.dataset.sel;         
    if(!sel){sel=this.data.isChange}    
    if(sel!=this.data.sel){
      this.setData({
        pageIndex:0,
        list:[],
        hasMore:true
      })
    }    
    if(this.data.hasMore==false)return;
    var pno = this.data.pageIndex+1;    
    var pageSize = this.data.pageSize;
    var choose = this.data.choose;      
    wx.request({      
      url: 'http://127.0.0.1:3000/shoplist',
      data:{pno:pno,pageSize:pageSize,cho:choose[sel].name},
      success:(res)=>{               
        var rows=this.data.list.concat(res.data.data);        
        var pageCount=res.data.pageCount;        
        var flag=pno<pageCount;             
        this.setData({
          list:rows,
          pageIndex:pno,
          hasMore:flag,         
          isChange:sel,
          sel:sel
        })        
        wx.showLoading({
          title: '正在加载中...',
        })
        setTimeout(function(){
          wx.hideLoading();
        },500)
      }
    })
  },
  getLoad(){      
    if (this.data.hasMore == false) return;
    var pno = this.data.pageIndex + 1;
    var pageSize = this.data.pageSize;
    var choose=this.data.choose;
    wx.request({
      url: 'http://127.0.0.1:3000/shoplist',
      data: { pno: pno, pageSize: pageSize,cho:choose[0].name},
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
  handle(event){
    console.log(event)
    var tid=event.currentTarget.dataset.tid;
    wx.navigateTo({
      url: '/pages/shopinfo/shopinfo?tid='+tid,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0,
    pageSize:6,
    hasMore:true,    
    sel:0,
    isChange: 0,
    choose:[
      { id: 0 ,name: 'tid'},
      { id: 1, name: 'sales' },
      { id: 2, name: 'price' },
      { id: 3, name: 'comment' },
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoad();
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