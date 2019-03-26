import React from 'react';
import './UsersList.css';


const UsersList = (props) => {
    
    const users = props.users.map(user => (
        <div className="user" key={user.login.uuid}>
            <div className="picture">
                <img src={user.picture.large} alt={user.name.last}/>
            </div>
            <div className="user-info">
                <h1>{user.name.first} {user.name.last}</h1>
                <h2>{user.location.state}</h2>
                <h3>{user.location.state}</h3>
                <p><span>Phone:</span> {user.phone}</p>
                <p><span>Email:</span> {user.email}</p>
            </div>
        </div>
    ))
  return (
      <ul>
       {users}
    </ul>
    )
}

export default UsersList;
