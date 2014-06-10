/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/common/SearchInput',
    'jsx!components/FilterablePlacesBox/AdvancedSearchBox',
    'jsx!components/FilterablePlacesBox/PlaceList',
    'reactbackbone',
], function ($, _, Backbone, React, SearchInput, AdvancedSearchBox, PlaceList) {

    "use strict";

    return React.createBackboneClass({

        render: function () {
            return (
                <div id="filterable-places-box">
                    <SearchInput />
                    <AdvancedSearchBox />
                    <PlaceList />
                </div>
                );
        }
    });

});
          

