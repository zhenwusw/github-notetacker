import React from 'react'

import UserProfile from './Github/UserProfile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'

import helpers from '../utils/helpers'

export default React.createClass({
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  init() {
    const username = this.props.params.username;
    helpers.getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      })
  },

  componentWillMount() {
    this.init()
  },

  componentWillReceiveProps() {
    this.init()
  },

  render() {
    const username = this.props.params.username

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    )
  }
})
