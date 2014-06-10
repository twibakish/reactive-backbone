/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/FilterablePlacesBox/PlaceRow',
    'reactbackbone',
], function ($, _, Backbone, React, PlaceRow) {

    "use strict";

    return React.createBackboneClass({

        getDefaultProps: function () {
            return {
                collection: new Backbone.Collection([
                    {name: "4 Krogar"},
                    {name: "Grillhouse"},
                    {name: "King of india"},
                    {name: "Bishops arms"},

                ])
            }
        },

        getBackboneModels: function () {
            return [this.props.collection];
        },

        render: function () {
            var places = this.props.collection ? this.props.collection.map(function (place) {
                return <PlaceRow model={place} />
            }) : [];
            return (
                <div id="place-rows">
                    {places}
                </div>
                );
        }
    });

});
          

