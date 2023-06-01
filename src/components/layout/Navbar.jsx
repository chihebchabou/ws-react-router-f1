import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* Link navigates between pages, without refreshing the whole page */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
