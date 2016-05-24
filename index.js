import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Albums from './modules/Albums'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Albums/:title" component={Albums}/>
    </Route>
  </Router>
), document.getElementById('app'))
