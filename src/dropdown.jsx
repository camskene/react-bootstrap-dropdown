var React = require('react');

var Dropdown = React.createClass({

  render: function() {
    return <div className="dropdown">
      <button className="btn btn-default dropdown-toggle" type="button">
        Dropdown
        <span class="caret"></span>
      </button>
      <ul className="dropdown-menu show">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
  }
});

module.exports = Dropdown;
