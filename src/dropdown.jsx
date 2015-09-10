var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

var Dropdown = React.createClass({

  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} />
    });
    return <div className="dropdown">
      <Button title={this.props.title} />
      <ul className="dropdown-menu show">
        {list}
      </ul>
    </div>
  }
});

module.exports = Dropdown;
