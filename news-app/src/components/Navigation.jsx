var React = require('react');
var Link = require('react-router').Link

var Navigation = React.createClass({
  render: function() {
    return(
      <nav>
        <Link to="/">News</Link>
        <Link to="/photos">Photos</Link>
      </nav>
    );
  }
});

module.exports = Navigation;