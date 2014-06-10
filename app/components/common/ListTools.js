/** @jsx React.DOM */

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'jsx!components/common/ListToolsCounter',
    'jsx!components/common/ListToolsPager',
    'reactbackbone',
], function ($, _, Backbone, React, ListToolsCounter, ListToolsPager) {

    "use strict";

    return React.createBackboneClass({

        render: function () {
            return (
                <div id="list-tools">
                    <ListToolsCounter />
                    <ListToolsPager />
                </div>
                );
        }
    });

});
          

