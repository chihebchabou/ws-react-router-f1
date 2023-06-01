import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Users data
import { users } from './users';

// App Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserList from './components/users/UserList';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        {/* Route render UI if location matches the route's path */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/users/:login" element={<User users={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
