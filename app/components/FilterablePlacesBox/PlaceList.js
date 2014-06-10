/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/common/ListTools',
    'jsx!components/FilterablePlacesBox/PlaceRows',
    'reactbackbone',
], function ($, _, Backbone, React, ListTools, PlaceRows) {

    "use strict";

    return React.createBackboneClass({

        render: function () {
            return (
                <div id="place-list">
                    <ListTools />
                    <PlaceRows />
                    <ListTools />
                </div>
                );
        }
    });

});
          

