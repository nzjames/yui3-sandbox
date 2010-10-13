YUI.add('template', function(Y) {
    var itemList = {

        BOUNDING: [
            '<table class="list-table" border="0" cellspacing="0" cellpadding="0">',
                '<tr class="list-sort">',
                    '<th class="list-column1" scope="col"><a class="" href="#" title="Column 1">Column 1</a></th>',
                    '<th class="list-column2" scope="col"><a class="" href="#" title="Column 2">Column 2</a></th>',
                '</tr>',
            '</table>'
            ].join(''),

        CONTENT: null
    }

    var item = {

        BOUNDING : '<tr class="list-content"></tr>',

        CONTENT : null,

        ITEM : [
            '<td class="list-column1">Item</td>',
            '<td class="list-column2">{itemValue}</td>',
            ].join("")
        }

    Y.namespace("template");
    Y.template = {
        itemList  : itemList,
        item : item,
    };

})
