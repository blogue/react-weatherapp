var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: 'solid lightblue 4px', padding: '5px', borderRadius: '10px', marginTop: '-8px'}}>
        <h3 style={{marginRight: '50px'}}>React Weather</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'black', textDecoration: 'none'}} style={{color: '‎blue', textDecoration: 'none', marginRight: '20px'}}>Get Weather</IndexLink>
        <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'black', textDecoration: 'none'}} style={{color: '‎blue', textDecoration: 'none', marginRight: '20px'}}>About</Link>
        <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'black', textDecoration: 'none'}} style={{color: '‎blue', textDecoration: 'none', marginRight: '20px'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
