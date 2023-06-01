import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  // Destruct user prop
  const { id, avatar_url, login } = user;

  return (
    <div className="card text-center" style={{ justifySelf: 'center' }}>
      <img src={avatar_url} alt="" className="round-img" />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`}>More</Link>
      </div>
    </div>
  );
};

export default UserItem;
