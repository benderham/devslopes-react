var React = require('react');

var NumberInput = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },

  onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  clear: function() {
    this.setState({
      value: ""
    });
  },

  render: function() {
    return (
      <input type="number" className="form-control" placeholder="#" value={this.state.value} onChange={this.onChange} />
    );
  }
});

module.exports = NumberInput;