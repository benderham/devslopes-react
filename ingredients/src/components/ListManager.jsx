var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  // Called once in the component life cycle - an initialiser
  getInitialState: function() {
    return {items: [], newItemText:''};
  },

  onChange: function(el) {
    // Update the state property on each keystroke
    this.setState({newItemText: el.target.value});
  },

  handleSubmit: function(el) {
    // Stop the button from getting click events as we use form onSubmit 
    el.preventDefault();

    // Get the current list of items
    var currentItems = this.state.items;
 
    // Add new item to the list
    currentItems.push(this.state.newItemText);

    // Update the main item list with the new list then clear out the input
    this.setState({items: currentItems, newItemText:''});
  },

  render: function() {
    // onChange is called with every keystroke so we can store the most recent data
    // value is what the user sees in the input box - we then point this to newItemText so it updates on each keystroke
    
    // inline css styles with 'style={divStyle}'
    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    };

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    };

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                <span className="input-group-btn">
                  <button className="btn btn-primary">Add</button>
                </span>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
});

module.exports = ListManager;