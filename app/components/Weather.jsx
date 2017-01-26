var React = require('react');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>CHECK WEATHER</h1>
        <WeatherForm/>
      </div>
    )
  }
});

module.exports = Weather;
