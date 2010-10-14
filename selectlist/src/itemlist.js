YUI.add('itemlist', function(Y) {

    Y.ItemList = Y.Base.create("itemlist", Y.Widget, [Y.WidgetParent, Y.WidgetChild], {

        /** 
         * Item List tempalte constants
         * @final BOUNDING_TEMPLATE 
         * @final CONTENT_TEMPLATE
         */

        BOUNDING_TEMPLATE : Y.template.itemList.BOUNDING,
        CONTENT_TEMPLATE : Y.template.itemList.CONTENT,

        bindUI: function() {
       
            // Add the Node Focus Manager
            this.get("boundingBox").plug(Y.Plugin.NodeFocusManager, { 
                descendants: "tr.list-content", // Rev1 (do we want to abstract out the selector?
                keys: { next: "down:40", previous: "down:38" },
                focusClass : "focus"
            });

        },

    }, 
    { 
        ATTRS : {
            defaultChildType: {  
                value: "DefaultItem" // This should always be overridden.  This is just a place holder
            },
            label : {
                validator: Y.Lang.isString
            }
        }
    });

    Y.Item = Y.Base.create("item", Y.Widget, [Y.WidgetChild], {

        BOUNDING_TEMPLATE : Y.template.item.BOUNDING,
        CONTENT_TEMPLATE : Y.template.item.CONTENT,
        ITEM_TEMPLATE : Y.template.item.ITEM,

        renderUI: function () {
            var s = this.get("strings");
            this.get("contentBox").setContent(Y.substitute(this.ITEM_TEMPLATE, {
                itemValue : this.get('label'),
                age : this.get('age'),
                newComments : this.get('newComments'),
                due : this.get('due')
                }));
        },

        bindUI: function () {
            // Refresh the Parent's focus manager's items to include this
            // (Add this item to the scroll list ;)
            this.get("parent").get("boundingBox").focusManager.refresh();
        },

    }, 
    {
        ATTRS : {
            label : {
                    validator: Y.Lang.isString
                },
                tabIndex: {
                    value: -1
                },
        }
    });

}, '3.2.0' ,{requires:['substitute', 'widget', 'widget-parent', 'widget-child' ]});
