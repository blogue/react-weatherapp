var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <h3 style={{display: 'flex', justifyContent: 'center'}}>It is currently 47 degrees in Portland.</h3>
    )
  }
});

module.exports = WeatherMessage;
