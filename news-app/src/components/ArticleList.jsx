var React = require('react');
var Article = require('./../components/Article.jsx');

var ArticleList = React.createClass({
  render: function() {

    var createArticle = function(article) {
      return <Article key={article.id} title={article.title} subtitle={article.subtitle} text={article.text} thumbnails={article.thumbnails} author={article.author} />;
    };
    
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.props.articles.map(createArticle)}
      </div>
    );
  }
});

module.exports = ArticleList;