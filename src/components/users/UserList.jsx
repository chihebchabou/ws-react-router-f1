import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div
      className="container"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
    >
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
