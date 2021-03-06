import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'

import store from './store'
import Root from './components/root'

render(
  <Provider store={store}>
  <Router>
      <Root />
  </Router>
  </Provider>,
  document.getElementById('main')
)
