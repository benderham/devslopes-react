var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var ThumbnailList = React.createClass({
  render: function() {

    var createThumbnail = function(thumbnail) {
      return <Thumbnail key={thumbnail.id} url={thumbnail.url} urlLarge={thumbnail.urlLarge} />;
    };

    return(
      <ul>
        {this.props.thumbnails.map(createThumbnail)}
      </ul> 
    );
  }
});

module.exports = ThumbnailList;