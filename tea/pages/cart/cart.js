// pages/cart/cart.js
Page({
  //勾选事件处理函数
  switchSelect:function(e){
    var Allprice=0,i=0;
    var tid=e.target.dataset.id;
    var index=parseInt(e.target.dataset.index);
    var item=this.data.carts[index];
    console.log(tid,index);
    item.isSelsect = !item.isSelsect;
    if (item.isSelsect){
      this.data.totalMoney += item.price * item.count;
    }    else{
      this.data.totalMoney -= item.price * item.count;
    }
    //判断是否全选
    for(i=0;i<this.data.carts.length;i++){
      Allprice += item.price*item.count;
    };
    if(Allprice==this.data.totalMoney){
      this.data.isAllSelect=true;
    }else{
      this.data.isAllSelect=false;
    }
    this.setData({
      carts:this.data.carts,
      totalMoney:this.data.totalMoney,
      isAllSelect:this.data.isAllSelect
    })
  },
  //全选
  allSelect:function(e){
    var i=0;
    if(!this.data.isAllSelect){
      this.data.totalMoney=0;
      for(i=0;i<this.data.carts.length;i++){
        this.data.carts[i].isSelect=true;
        this.data.totalMoney+=this.data.carts[i].price*this.data.carts[i].count;
      }
    }else{
      for(i=0;i<this.data.carts.length;i++){
        this.data.carts[i].isSelect=false;
      }
      this.data.totalMoney=0;
    }
    this.setData({
      carts:this.data.carts,
      isAllSelect:!this.data.isAllSelct,
      totalMoney:this.data.totalMoney
    })
  },
  //结算
  toBuy(){
    wx.showToast({
      title: '去结算',
      icon:'success',
      duration:3000
    });    
  },
  //数量变化处理
  handleQuantityChange(e){
    var componentId=e.componentId;
    var quantity=e.quantity;
    this.data.carts[componentId].count.quantity=quantity;
    this.setData({
      carts:this.data.carts
    })
  },
  //减数
  delCount(e){
    var index=e.target.dataset.index;
    var count=this.data.carts[index].count;
    if(count>1){
      this.data.carts[index].count--;
    }
    this.setData({
      carts:this.data.carts
    });
    this.priceCount();
  },
  //加数
  addCount(e) {
    var index = e.target.dataset.index;
    var count = this.data.carts[index].count;
    if (count < 999) {
      this.data.carts[index].count++;
    }
    this.setData({
      carts: this.data.carts
    });
    this.priceCount();
  },
  //计算合计
  priceCount:function(){
   this.data.totalMoney=0;
   for(var i=0;i<this.data.carts.length;i++){
     if(this.datda.carts[i].isSelsec==true){
       this.data.totalMoney+=this.data.carts[i].price*this.data.carts[i].count;
     }
   } 
   this.setData({
     totalMoney:this.data.totalMoney
   })
  },
  //删除
  delGoods:function(e){
    this.data.carts.splice(e.target.id.substring(3),1);
    if(this.data.carts.length>0){
      this.setData({
        carts:this.data.carts
      })
      wx.setStorageSync('cart',this.data.carts);
      this.priceCount;
    }else{
      this.setData({
        carts:this.data.carts,
        isCart:false,
        hidden:true
      })
      wx.setStorageSync('cart', [])
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    isCart:false,
    hidden:null,
    isAllSelect:false,
    totalMoney:0
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
    //获取产品展示页保存的数据
    
    var arr=wx.getStorageSync('cart') || [];
    console.log(arr);
    if(arr.length>0){
      this.setData({
        carts:arr,
        isCart:true,
        hidden:false
      });    
    }else{
      this.setData({
        isCart:false,
        hidden:true
      })
    }    
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