define(["dojo/_base/declare","dojo/dom","dijit/layout/BorderContainer","dijit/layout/TabContainer","dijit/layout/ContentPane","app/MenuTree","app/MenuBar","dojo/domReady!"], 
	function(declare,dom,BorderContainer,TabContainer,ContentPane,MenuTree,MenuBar){
  return declare(null, {
    constructor: function(){
    	
    },

    //初始化界面
    init:function(){
    	console.log("初始化界面中");

    	//创建BorderContainer并且加入到app中
    	console.log("初始化程序框架");
    	var appLayout = new BorderContainer({
    		style: "height: 100%; width: 100%",
    		design:"headline"
    	});
    	

        appLayout.addChild(new ContentPane({
            region:"center",
            content:"2"
        }));

        //新建目录
        console.log("初始化目录树对象");
        var menuBar = new MenuBar();
        var myMenu = menuBar.init();

    	//创建菜单栏位置，并且加入到BorderContener中
    	console.log("初始化菜单栏");
    	var menuContener = new ContentPane({
    		region:"top",
    		content:myMenu
    	});
    	appLayout.addChild(menuContener);

        //新建目录树
        console.log("新建目录树对象");
        var menuTree = new MenuTree();
        var myTree = menuTree.init();

    	//创建导航栏位置，并且加入到BorderContenr
    	console.log("初始化导航");
    	var naviContener = new ContentPane({
    		region:"left",
    		content: myTree
    	});
    	appLayout.addChild(naviContener);


    	//启动界面
    	console.log("启动界面");
        appLayout.placeAt(document.body);
    	appLayout.startup();
        console.log("启动完成");
    }
  });
});