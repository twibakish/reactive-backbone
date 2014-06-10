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
                <div id="list-tools-counter">
                    <span>Visar 10 av 100 ställen</span>
                </div>
                );
        }
    });

});
          

