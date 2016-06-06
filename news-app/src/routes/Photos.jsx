var React = require('react');
var ThumbnailList = require('./../components/ThumbnailList.jsx');

var galleryData = [
  {
    "id": 1,
    "url": "http://lorempixel.com/g/300/300/",
    "urlLarge": "http://lorempixel.com/g/1024/768/"
  },
  {
    "id": 2,
    "url": "http://lorempixel.com/a/300/300/",
    "urlLarge": "http://lorempixel.com/a/1024/768/"
  },
  {
    "id": 3,
    "url": "http://lorempixel.com/b/300/300/",
    "urlLarge": "http://lorempixel.com/b/1024/768/"
  },
  {
    "id": 4,
    "url": "http://lorempixel.com/c/300/300/",
    "urlLarge": "http://lorempixel.com/c/1024/768/"
  },
   {
    "id": 5,
    "url": "http://lorempixel.com/d/300/300/",
    "urlLarge": "http://lorempixel.com/d/1024/768/"
  },
  {
    "id": 6,
    "url": "http://lorempixel.com/e/300/300/",
    "urlLarge": "http://lorempixel.com/e/1024/768/"
  },
  {
    "id": 7,
    "url": "http://lorempixel.com/f/300/300/",
    "urlLarge": "http://lorempixel.com/f/1024/768/"
  },
  {
    "id": 8,
    "url": "http://lorempixel.com/h/300/300/",
    "urlLarge": "http://lorempixel.com/h/1024/768/"
  },
]

var Photos = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Photos</h1>
        <ThumbnailList thumbnails={galleryData} />
      </div>
    );
  }
});

module.exports = Photos;