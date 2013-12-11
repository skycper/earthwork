define(["dojo/_base/declare","app/AppView"], function(declare,AppView){
  return declare(null, {
    constructor: function(){
    	this.view = new AppView();
    },

    //启动程序
    startup:function(){
    	console.log("程序正在启动中" );
    	this.view.init();
    }
  });
});