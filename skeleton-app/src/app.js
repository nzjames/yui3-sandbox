YUI.add('app', function(Y) {

    /**
     * App
     */
    
    var App,
        APP = 'app',
        
    // *** Constructor *** //
    
    App = function (config) {
        
        App.superclass.constructor.apply(this, arguments);
    };
    
    // *** Static *** //
    
    Y.mix(App, {
        
    });
    
    // *** Prototype *** //
    
    Y.extend(App, Y.Base, {
        
        // *** Instance Members *** //
        
        _mod1 : null,
        _controler : null,
        
        // *** Base Methods *** //
        
        initializer : function (config) {

            // Setup custom widget
            this._mod1 = new Y.Mod1({});
            this._mod1.render(".column1-contents");

            // Event Wiring
            this._mod1.on('keydown', Y.bind(this.handleKeyDown, this));

        },
        
        // *** Public Methods *** //

        handleKeyDown : function (e) {
            Y.log(e);
        }
        
        // *** Private Methods *** //
        
    });
    
    Y.namespace('Skeleton');
    Y.Skeleton.App = App;

}, '3.2.0' ,{requires:['base-base']});
