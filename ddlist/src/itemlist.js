YUI.add('itemlist', function(Y) {

Y.ItemList = Y.Base.create("itemlist", Y.Widget, [Y.WidgetParent, Y.WidgetChild], {

    BOUNDING_TEMPLATE : Y.template.itemList.BOUNDING,
    CONTENT_TEMPLATE : Y.template.itemList.CONTENT,

}, { 
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

        // We need to call this when a new Item is added,
        // but the DD isn't setup yet.
        // This is what we need custom events for that we can wire up at the 
        // top level
        //this.get('parent').get('boundingBox').delegate.syncTargets();
        Y.log(this.get('parent').get('boundingBox'));

    },


}, {

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
