var React = require('react');
var NumberInput = require('./NumberInput.jsx');
var Result = require('./Result.jsx');

var Calculator = React.createClass({

  getInitialState: function() {
    return {
      value: ""
    }
  },

  doAdd: function() {
    var result = (parseInt(this.refs.input1.state.value) + parseInt(this.refs.input2.state.value));

    if (isNaN(result)) {
      alert("Numbers Only!");
    } else {
      this.setState({
        value: result
      });
    }
  },

  doSubtract: function() {
    var result = (parseInt(this.refs.input1.state.value) - parseInt(this.refs.input2.state.value));

    if (isNaN(result)) {
      alert("Numbers Only!");
    } else {
      this.setState({
        value: result
      });
    }
  },

  doDivide: function() {
    var result = (parseInt(this.refs.input1.state.value) / parseInt(this.refs.input2.state.value));

    if (isNaN(result)) {
      alert("Numbers Only!");
    } else {
      this.setState({
        value: result
      });
    }
  },

  doMultiply: function() {
    var result = (parseInt(this.refs.input1.state.value) * parseInt(this.refs.input2.state.value));

    if (isNaN(result)) {
      alert("Numbers Only!");
    } else {
      this.setState({
        value: result
      });
    }
  },

  ClearAll: function() {
    this.refs.input1.clear();
    this.refs.input2.clear();
    this.setState({
      value: ""
    });
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Simple React Calculator
        </div>
        <div className="panel-body">
          <NumberInput ref="input1" />
          <NumberInput ref="input2" />        
          <button type="button" className="btn btn-primary" onClick={this.doAdd}>+ Add</button>
          <button type="button" className="btn btn-primary" onClick={this.doSubtract}>- Subract</button>
          <button type="button" className="btn btn-primary" onClick={this.doDivide}>/ Divide</button>
          <button type="button" className="btn btn-primary" onClick={this.doMultiply}>* Multiply</button>
          <Result value={this.state.value} />
          <button type="button" className="btn btn-danger btn-large" onClick={this.ClearAll}>Clear</button> 
        </div>
      </div>
    );
  }
});

module.exports = Calculator;