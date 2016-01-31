import React from 'react'
import { Router, Route} from 'react-router'

import Main from '../components/Main'
import Profile from '../components/Profile'

module.exports = (
  <Router>
    <Route name="app" path="/" component={Main}>
      <Route name="profile" path="profile/:username" component={Profile}>
      </Route>
    </Route>
  </Router>
)
