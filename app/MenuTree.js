define(["dojo/_base/declare","dojo/store/Memory","dijit/tree/ObjectStoreModel","dijit/Tree"], 
	function(declare,Memory,ObjectStoreModel,Tree){
    return declare(null, {
    constructor: function(){
        // var tree = new Tree(null);
    },

    //程序树初始化
    init:function(){
    	console.log("初始化树" );

    	//创建程序树目录数据，以后用数据对象驱动
    	var myMenu = new Memory({data:[
    		{id:'programe',name:'管理系统',type:'super'},
    		{id:'subprograme',name:'公司管理',type:'subprograme',parent:'programe'},
    		{id:'subprograme',name:'土方车管理',type:'subprograme',parent:'programe'},
    		],
    		getChildren:function(object){
    			return this.query({parent:object.id})
    		}});

    	//创建树模型
    	var myMenuModel = new ObjectStoreModel({
        	store: myMenu,
        	query: {id: 'programe'}
    		});

    	
    	//创建树
    	 var tree = new Tree({
        	model: myMenuModel
    	});

         console.log(tree);

        return tree;
         // this.tree = tree;
    }
  });
});