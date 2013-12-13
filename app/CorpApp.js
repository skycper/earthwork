define(["dojo/_base/declare","dijit/layout/BorderContainer","dijit/layout/ContentPane"], 
	function(declare,BorderContainer,ContentPane){
  return declare(null, {
    constructor: function(){
    },

    //启动公司管理系统
    startup:function(){
    	console.log("启动公司管理系统" );

    	//生成程序容器
    	var appBorderContainer = new BorderContainer({
    		regeion:"center"
    	});

    	//生成左框公司树
    	var appLeftContener = new ContentPane({
    		regeion:"left",
    		content:"公司树"
    	});

    	//生成右框维护界面
    	var appRightContener = new ContentPane({
    		regeion:"center",
    		content:"维护内容"
    	});

    	//返回APP

    	return appBorderContainer;



    }
  });
});