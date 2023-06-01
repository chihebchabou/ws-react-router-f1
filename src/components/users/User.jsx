import React from 'react';

import { useParams, useNavigate, Navigate } from 'react-router-dom';

const User = ({ users }) => {
  // Destruct login parameter from url params using useParams hook
  const { login } = useParams();
  const navigate = useNavigate();

  // Lookup the user from users list using login parameter
  const user = users.find(user => user.login === login);
  console.log(user);

  if (!user) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="container">
      <div className="card" style={{ width: '25%' }}>
        <img src={user.avatar_url} alt="avatar" className="round-img" />
        <h3 className="text-center">{user.login}</h3>
        <button
          className="btn btn-primary"
          style={{ display: 'block', margin: 'auto', width: '80%' }}
          onClick={() => navigate('/users')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default User;
