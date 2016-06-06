var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');
var History = new CreateHistory({
  queryKey: false
});

var Base = require('./routes/Base.jsx');
var News = require('./routes/News.jsx');
var Photos = require('./routes/Photos.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base} >
      <IndexRoute component={News} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

module.exports = Routes;