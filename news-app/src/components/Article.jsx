var React = require('react');
var ThumbnailList = require('./ThumbnailList.jsx');

var Article = React.createClass({
  render: function() {

    return(
      <div>
        <img src={this.props.author} />
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.text}</p>
        <ThumbnailList thumbnails={this.props.thumbnails} />
      </div>
    );
  }
});

module.exports = Article;