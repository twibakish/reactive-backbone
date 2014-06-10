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
                <div className="place-row block">
                    <div className="place-row-image">
                        <img src="/src/img/example.jpg" />
                    </div>
                    <div className="place-row-data">
                        <div className="place-row-data-name">
                            <h2>{this.props.model.get('name')}</h2>
                        </div>
                        <div className="place-row-data-details">
                        </div>
                    </div>
                </div>
                );
        }
    });

});
          

