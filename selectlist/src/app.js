Y =  YUI({ 
        modules: {
            "template": {
                fullpath: "src/template.js"
            },
            "itemlist": {
                fullpath: "src/itemlist.js",
                requires: ["substitute", "widget", "widget-parent", "widget-child", 'node-focusmanager', 'template']
            }
        }
     }).use('listbox', 'itemlist','test', 'console', "console-filters", 'node-event-simulate', 'template', function(Y) {

     Y.namespace("ddlist");
        Y.ddlist.itemList = new Y.ItemList({  
            id: "itemlist", 
            defaultChildType: "Item"
        });

        Y.ddlist.itemList.render(".column1-contents"); // Upgrade Contents to id from class
        
        for (var ii in userConfig.items){
           Y.ddlist.itemList.add(userConfig.items[ii]); 
        }

        Y.one('.new-item').on('click', function(e) {
            Y.ddlist.itemList.add({ label: "New Item" }); 
        });
    });
