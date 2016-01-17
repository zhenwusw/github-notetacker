import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Notes: {this.props.notes}
      </div>
    )
  }
})
