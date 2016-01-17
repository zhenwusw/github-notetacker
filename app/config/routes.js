import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import Main from '../components/Main'
import Profile from '../components/Profile'

module.exports = (
  <Router histroy={hashHistory}>
    <Route name="app" path="/" component={Main}>
      <Route name="profile" path="profile/:username" component={Profile}>
      </Route>
    </Route>
  </Router>
)
