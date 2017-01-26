var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div>
        <form style={{display: 'flex', justifyContent: 'center'}}>
          <input type="text" ref="city" placeholder="Enter city name" style={{width: '300px', height: '30px', borderRadius: '10px', fontSize: '18px'}}/>
          <button style={{background: 'white', color: 'blue', borderStyle: 'inset', borderWidth: '2px 3px', borderColor: 'blue lightblue lightblue blue', borderRadius: '20px'}}>Submit</button>
        </form>
        <p style={{display: 'flex', justifyContent: 'center'}}>THIS IS WHERE THE WEATHER RESULTS GO</p>
      </div>
    );
  }
});

module.exports = WeatherForm;
