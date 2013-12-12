define(["dojo/_base/declare","dijit/PopupMenuBarItem","dijit/MenuBar","dijit/Menu","dijit/MenuItem","dijit/DropDownMenu"], 
    function(declare,PopupMenuBarItem,MenuBar,Menu,MenuItem,DropDownMenu){
  return declare(null, {
    constructor: function(){
    },

    //初始化菜单
    init:function(){
    	console.log("初始化菜单");
    	var menuBar = new MenuBar({});

        var fileMenu = new DropDownMenu({});
        fileMenu.addChild(new MenuItem({
            label:"新建"
        }));
        fileMenu.addChild(new MenuItem({
            label:"保存"
        }));
        menuBar.addChild(new PopupMenuBarItem({
            label:"文件",
            popup:fileMenu
        }));

        var editMenu = new DropDownMenu({});
        editMenu.addChild(new MenuItem({
            label:"修改"
        }));
        editMenu.addChild(new MenuItem({
            label:"保存"
        }));
        menuBar.addChild(new PopupMenuBarItem({
            label:"编辑",
            popup:editMenu
        }));

        return menuBar;

    }
  });
});