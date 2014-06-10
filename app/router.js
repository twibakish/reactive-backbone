define(function (require) {

    "use strict";

    return Backbone.Router.extend({

        ext: require('ext'),
        views: require('components'),
        currentView: null,
        rootNode: $(document.body).find('#content').get(0),

        routes: {
            ':view': 'loadView',
            ':view/:id': 'loadView'
        },


        initialize: function () {
            Backbone.history.start();
        },

        /**
         * Load a view based on a route
         * @param  {string} location  View id ie invoice/customer/etc
         * @param  {string} param Parameters for the view ie (id) etc
         */
        loadView: function (location, param) {
            return this.setView(location, param);
        },

        setView: function (location, param) {
            var self = this;

            //404: Component not found.
            if (!this.views[location]) {
                return false;
            }

            //Unmount any active component in DOM.
            if (this.currentView) {
                React.unmountComponentAtNode(this.rootNode)
            }

            //Render new component. 
            this.currentView = React.renderComponent(new this.views[location](), self.rootNode);
            return true;
        }
    });
});