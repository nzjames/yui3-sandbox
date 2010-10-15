YUI.add('mod1', function(Y) {

    Y.Mod1 = Y.Base.create('mod1', Y.Widget, [], {

        BOUNDING_TEMPLATE : '<div class="mod1"></div>',
        CONTENT_TEMPLATE : '<input></input>',

    },
    {
        ATTRS : {
            label : {
                value : ""
            }
        }
    });

}, '3.2.0' ,{requires:["widget", "widget-parent"]});
