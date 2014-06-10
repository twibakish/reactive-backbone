/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/FilterablePlacesBox',
    'reactbackbone',
], function ($, _, Backbone, React, FilterablePlacesBox) {

    "use strict";

    return React.createBackboneClass({

        getDefaultProps: function () {
            return {
                collection: new Backbone.Collection()
            }
        },

        getBackboneModels: function () {
            return [this.props.collection];
        },

        render: function () {
            return (
                <section id="search-view">
                    <FilterablePlacesBox />
                </section>
                );
        }
    });

});
          

