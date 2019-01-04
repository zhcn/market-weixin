// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     category_list:[],
     item_list : {},
     cur_category:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.data.cur_category = {
          index : 1,
          category: "测试用例1"
      };
      this.setData({
        cur_category:this.data.cur_category
        });
      for(let i=0; i<100; i++) {
        let category = "测试用例" + i;
        this.data.category_list.push({
          category:category,
          index : i
        });
        let item_list = [];
        for(let j=0; j<100;j++){
          item_list.push(
           {
             title:"测试用例",
             sellNum: "200",
             price:2.99,
             numInCart:0,
             img:"shop-pic.jpg"
           });
        }
        this.data.item_list[category] = item_list;
      }
      this.setData({ category_list: this.data.category_list, item_list: this.data.item_list });
      console.log(this.data);
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
  tapItem: function(e){
    console.log(e);
    console.log("tapItem");
  },
  tapCheck: function(e) {
    console.log(e);
    console.log("tapCheck");
  }
})