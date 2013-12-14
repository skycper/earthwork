define(["dojo/_base/declare","dijit/layout/BorderContener","dijit/layout/ContentPane","app/MenuTree"], 
    function(declare,BorderContener,ContentPane,MenuTree){
  return declare(null, {
    constructor: function(){
    },

    //启动公司管理程序
    startup:function(){
    	console.log("公司管理程序正在启动中" );

        var corpApp = new BorderContener({});


        //没有数据，先用功能树代替
        var corpTree = new MenuTree;
        var myCorpTree = corpTree.init();


        var corpAppLeft = new ContentPane({
            region:"left",
            content:myCorpTree
        });

        var corpAppCenter = new ContentPane({
            region:"center",
            content:"这里以后是修改表单"
        });

        return corpApp;




    }
  });
});