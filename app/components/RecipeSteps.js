/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/RecipeStep',
    'collections/RecipeSteps',
    'reactbackbone',
], function ($, _, Backbone, React, RecipeStep, RecipeStepsCollection) {

    "use strict";

    return React.createBackboneClass({

        getDefaultProps: function () {
            return {
                collection: new RecipeStepsCollection([
                    {order: "1", text: "This is the first step"},
                    {order: "2", text: "This is the second step"},
                    {order: "3", text: "This is the third step"},
                    {order: "5", text: "This is the fifth step"},
                    {order: "6", text: "This is the sixth step"},
                    {order: "7", text: "This is the seventh step"}

                ])
            }
        },

        getBackboneModels: function () {
            return [this.props.collection];
        },

        render: function () {
            var stepNodes = this.props.collection ? this.props.collection.map(function (step) {
                return <RecipeStep model={step} />
            }) : [];
            return (
                <section id="recipeStepsContainer2">
               {stepNodes}
                </section>
                );
        }
    });

});
          

