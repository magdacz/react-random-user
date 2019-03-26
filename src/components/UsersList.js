import React from 'react';
import './UsersList.css';


const UsersList = (props) => {
    
    const users = props.users.map(user => (
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last}/>
            <h4>{user.name.first} {user.name.last}</h4>
            <p>{user.email}</p>
        </div>
    ))
  return (
      <ul>
       {users}
    </ul>
    )
}

export default UsersList;
