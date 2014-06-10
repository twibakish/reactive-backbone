/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'reactbackbone',
], function ($, _, Backbone, React) {

    "use strict";

    return React.createBackboneClass({

        render: function () {
            return (
                <div id="search-input">
                    <input type="text" placeholder="Search..." />
                </div>
                );
        }
    });

});
          

