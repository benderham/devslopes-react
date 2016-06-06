var React = require('react');
var Navigation = require('./Navigation.jsx');

var Header = React.createClass({
  render: function() {
    return(
      <header>
        <div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </div>
        <div>
          Social Media Icons
        </div>
        <Navigation />
      </header>
    );
  }
});

module.exports = Header;