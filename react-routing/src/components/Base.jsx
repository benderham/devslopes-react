var React = require('react');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is the header!</h1>
        {this.props.children}
        <h1>This is footer</h1>
      </div>
    );
  }
});

module.exports = Base;