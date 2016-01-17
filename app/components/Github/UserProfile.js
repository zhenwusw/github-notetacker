import React from 'react'

class UserProfile extends React.Component {
  render() {
    const bio = this.props.bio
    return (
      <div>
        <h3> User Profile </h3>
        <ul className="list-group">
          {bio.avatar_url && <li className="list-group-item"><img src={bio.avatar_url} style={{width: "100%", height: "100%"}}/></li>}
          {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
          {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
          {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
          {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
          {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
        </ul>
      </div>
    )
  }
}

export default UserProfile
