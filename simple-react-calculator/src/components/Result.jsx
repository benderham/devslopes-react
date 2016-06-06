var React = require('react');

var Result = React.createClass({
  render: function() {
    return (
      <input type="text" className="form-control" placeholder="=" value={this.props.value} readOnly />
    );
  }
});

module.exports = Result;