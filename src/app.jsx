var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a color', // text for button
  items: ['Red', 'Green', 'Blue'] // list items for dropdown
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.container'));

