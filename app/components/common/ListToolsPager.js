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
                <div id="list-tools-pager">
                    <span>Pager ska vara här</span>
                </div>
                );
        }
    });

});
          

