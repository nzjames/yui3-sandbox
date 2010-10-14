
Y.use('dd-constrain', 'dd-proxy', 'dd-drop', 'dd-delegate', 'dd-drop-plugin', function(Y) {
    //Listen for all drop:over events
    Y.DD.DDM.on('drop:over', function(e) {
        //Get a reference to our drag and drop nodes
        var drag = e.drag.get('node'),
            drop = e.drop.get('node');
        
        //Y.log(drop.get('tagName').toLowerCase());
        //Are we dropping on a li node?
        if (drop.get('tagName').toLowerCase() === 'tr') {
            //Y.log('dropping on tr');
            //Are we not going up?
            if (!goingUp) {
                drop = drop.get('nextSibling');
            }
            //Add the node to this list
            e.drop.get('node').get('parentNode').insertBefore(drag, drop);
            //Resize this nodes shim, so we can drop on it later.
            e.drop.sizeShim();
        }
    });
    //Listen for all drag:drag events
    Y.DD.DDM.on('drag:drag', function(e) {
        //Get the last y point
        var y = e.target.lastXY[1];
        //is it greater than the lastY var?
        if (y < lastY) {
            //We are going up
            goingUp = true;
        } else {
            //We are going down.
            goingUp = false;
        }
        //Cache for next check
        lastY = y;
    });
    //Listen for all drag:start events
    Y.DD.DDM.on('drag:start', function(e) {
        //Get our drag object
        var drag = e.target;
        //Set some styles here
        drag.get('node').setStyle('opacity', '.5');
        drag.get('dragNode').setStyles({
            border: '0'
        });
    });
    //Listen for a drag:end events
    Y.DD.DDM.on('drag:end', function(e) {
        var drag = e.target;
        //Put our styles back
        drag.get('node').setStyles({
            visibility: '',
            opacity: '1'
        });
    });
    //Listen for all drag:drophit events
    Y.DD.DDM.on('drag:drophit', function(e) {
        var drop = e.drop.get('node'),
            drag = e.drag.get('node');
 
        //if we are not on an li, we must have been dropped on a ul
        if (drop.get('tagName').toLowerCase() !== 'tr') {
            if (!drop.contains(drag)) {
                drop.appendChild(drag);
            }
        }
    });
    
    //Static Vars
    var goingUp = false, lastY = 0;

    var del = new Y.DD.Delegate({
        cont: '.list-table',
        nodes: 'tr.list-content',
        target: true
    });
    del.dd.plug(Y.Plugin.DDConstrained, {
        constrain2node: '#itemlist',
        sticky: true 
    });
    del.dd.plug(Y.Plugin.DDProxy, {
            moveOnEnd: false
        });
    // Global Access to the delegate object for debugging 
    d = del;
 
});
