// pages/shopinfo/shopinfo.js
Page({
  getMsg(){
    var tid=this.data.tid;
    wx.request({
      url: 'http://127.0.0.1:3000/shopinfo',
      data:{tid:tid},
      success:(res)=>{        
        this.setData({
          list:res.data
        })
      }
    })
  },
  handle(){
    var isHidden=this.data.isHidden;
    if(isHidden){
      this.setData({
        isHidden:false
      })
    }else{
      this.setData({
        isHidden:true
      })
    }
  },
  addCart(e){    
    var tid=this.data.tid;
    console.log(this.data.list)
    var goods={};
    goods.isSelect=false;    
    //为数据列表添加count元素，用于记录添加到购物车的数量
    goods.count=1;
    goods.tid=this.data.list[0].tid;
    goods.title = this.data.list[0].title;        
    goods.img_url = this.data.list[0].img_url; 
    goods.price = this.data.list[0].price;
    console.log(goods) ;   
    var title=goods.title;
    var count=goods.count;
    console.log(title)
    if(title.length>0){
      goods.title=title.substring(0,13)+'...';
    }
    console.log(tid,goods,title,count);
    var arr=wx.getStorageSync('cart') || [];
    console.log(arr)
    if(arr.length>0){
      for(var j in arr){
        if(arr[j].tid==tid ){
          arr[j].count+=1;
          try{
            wx.setStorageSync('cart', goods)
          }catch(e){
            console.log(e)
          }
          wx.showToast({
            title: '加入购物车成功！',
            icon:'success',
            duration:2000
          });
          this.closeDialog();
          return;
        }
      };
      arr.push(goods);
    }else{
      arr.push(goods)
    }
    try{
      wx.setStorageSync('cart', arr);
      wx.showToast({
        title: '加入购物车成功！',
        icon:'success',
        duration:2000
      });      
      return;
    }catch(e){
        console.log(e)
    }
  
  },
  /**
   * 页面的初始数据
   */
  data: {
    tid:'',
    isHidden:true,
    list:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tid:this.options.tid
    }) ;    
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})