/** @jsx React.DOM */

define(['react'], function (React) {

    return React.createClass({

        render: function () {
            return (
                <div className="recipeStep" onClick={this.handleClick} key={this.props.model.get('order')}>
                    <ul>
                        <li className="recipeStepOrder">
            		{this.props.model.get('order')}
                        </li>
                        <li className="recipeStepDescription">
                    {this.props.model.get('text')}
                        </li>
                    </ul>
                </div>
                );
        },

        handleClick: function () {
            this.props.model.toggle();
        }
    });

});
          

