var React = require('react');

var Button = React.createClass({
  render: function() {
  	return <button className="btn btn-default dropdown-toggle" type="button">
      {this.props.title} <span className="caret"></span>
    </button>
  }
});

module.exports = Button;
