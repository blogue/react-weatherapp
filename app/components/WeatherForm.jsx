var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref="city" placeholder="Enter city name" style={{width: '300px', height: '30px', borderRadius: '10px', fontSize: '18px', marginBottom: '10px'}}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button style={{width: '300px', height: '30px', background: 'white', color: 'blue', borderStyle: 'inset', borderWidth: '2px 3px', borderColor: 'blue lightblue lightblue blue', borderRadius: '20px', fontSize: '20px'}}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
