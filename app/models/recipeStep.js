define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({

        defaults: {
            completed: false,
            order: 0,
            text: ''
        },

        toggle: function () {
            this.set('completed', !this.get('completed'));
        }

    });
});