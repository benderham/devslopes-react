var React = require('react');

var Thumbnail = React.createClass({
  render: function() {
    return(
      <li>
        <a className="fancybox" rel="group" href={this.props.urlLarge}><img src={this.props.url} /></a>
      </li>
    );
  }
});

module.exports = Thumbnail;