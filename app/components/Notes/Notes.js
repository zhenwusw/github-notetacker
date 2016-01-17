import React from 'react'

class Notes extends React.Component {
  render() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Notes: {this.props.notes}
      </div>
    )
  }
}

export default Notes
