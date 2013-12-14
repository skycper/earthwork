define(["dojo/_base/declare","dijit/layout/BorderContainer","dijit/layout/ContentPane","app/MenuTree","dijit/form/ValidationTextBox"], 
    function(declare,BorderContainer,ContentPane,MenuTree,ValidationTextBox){
  return declare(null, {
    constructor: function(){
    },

    //启动公司管理程序
    startup:function(){
    	console.log("公司管理程序正在启动中" );

        var corpApp = new BorderContainer({
            title:"公司管理",
            selected:true
        });


        //没有数据，先用功能树代替
        var corpTree = new MenuTree;
        var myCorpTree = corpTree.init();


        var corpAppLeft = new ContentPane({
            region:"left",
            content:myCorpTree
        });
        corpApp.addChild(corpAppLeft);

        var corpAppCenter = new ContentPane({
            region:"center",
            href:"app/views/corpapp/corpAppView.html"
        });
        corpApp.addChild(corpAppCenter);

        return corpApp;




    }
  });
});