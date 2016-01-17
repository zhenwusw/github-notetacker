import React from 'react'
import { Router } from 'react-router'

class SearchGithub extends React.Component {
  handleSubmit() {
    const username = this.refs.username.value
    this.refs.username.value = ''
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub
