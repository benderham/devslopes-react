var React = require('react');
var ArticleList = require('./../components/ArticleList.jsx');

var newsData = [
  {
    "id": 1,
    "title": "A News Article",
    "subtitle": "In the News",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at risus malesuada, rhoncus sapien quis, ultricies neque. Proin quis consectetur ipsum. Aenean in laoreet quam, id placerat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel risus posuere turpis consectetur scelerisque at vitae quam. Praesent convallis tincidunt ultrices. Phasellus metus orci, dapibus sed purus eget, aliquet fermentum turpis.",
    "thumbnails": [
      {
        "id": 1,
        "url": "http://lorempixel.com/g/200/200/",
        "urlLarge": "http://lorempixel.com/g/1024/768/"
      },
      {
        "id": 2,
        "url": "http://lorempixel.com/h/200/200/",
        "urlLarge": "http://lorempixel.com/h/1024/768/"
      }
    ],
    "author": "https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/128.jpg"
  },
  {
    "id": 2,
    "title": "A News Article",
    "subtitle": "In the News",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at risus malesuada, rhoncus sapien quis, ultricies neque. Proin quis consectetur ipsum. Aenean in laoreet quam, id placerat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel risus posuere turpis consectetur scelerisque at vitae quam. Praesent convallis tincidunt ultrices. Phasellus metus orci, dapibus sed purus eget, aliquet fermentum turpis.",
    "thumbnails": [
      {
        "id": 1,
        "url": "http://lorempixel.com/b/200/200/",
        "urlLarge": "http://lorempixel.com/b/1024/768/"
      },
      {
        "id": 2,
        "url": "http://lorempixel.com/x/200/200/",
        "urlLarge": "http://lorempixel.com/x/1024/768/"
      }
    ],
    "author": "https://s3.amazonaws.com/uifaces/faces/twitter/iconfinder/128.jpg"
  },
  {
    "id": 3,
    "title": "A News Article",
    "subtitle": "In the News",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at risus malesuada, rhoncus sapien quis, ultricies neque. Proin quis consectetur ipsum. Aenean in laoreet quam, id placerat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel risus posuere turpis consectetur scelerisque at vitae quam. Praesent convallis tincidunt ultrices. Phasellus metus orci, dapibus sed purus eget, aliquet fermentum turpis.",
    "thumbnails": [
      {
        "id": 1,
        "url": "http://lorempixel.com/y/200/200/",
        "urlLarge": "http://lorempixel.com/y/1024/768/"
      },
      {
        "id": 2,
        "url": "http://lorempixel.com/l/200/200/",
        "urlLarge": "http://lorempixel.com/l/1024/768/"
      },
      {
        "id": 3,
        "url": "http://lorempixel.com/c/200/200/",
        "urlLarge": "http://lorempixel.com/c/1024/768/"
      }
    ],
    "author": "https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg"
  }
];

var News = React.createClass({
  render: function() {

    return(
      <div>
        <ArticleList title="News" articles={newsData} />
      </div>
    );
  }
});

module.exports = News;

