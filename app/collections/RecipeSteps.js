define(['jquery', 'underscore', 'backbone', 'models/RecipeStep'], function ($, _, Backbone, RecipeStepModel) {

    return Backbone.Collection.extend({

        model: RecipeStepModel
    });

});