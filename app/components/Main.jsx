var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Hello from your friendly React.js Main Component!</h2>
        <p>Here's some random test text.</p>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
