// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({ user, handleLogout }) => {
  const location = useLocation();

  // Don't show Navbar on login and register pages
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className='logo'>QuizMaker</Link>
      </div>
      <div className="navbar-right">
        {!user ? (
          <>
<<<<<<< HEAD
           <div className="navbar-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </>
        ) : user.role === 'admin' ? (
          <>
            <div className="navbar-links">
              <Link to="/admin">Dashboard</Link>
              <Link to="/create">Add Questions</Link>
              <Link to="/leaderboard">LeaderBoard</Link>
              <button className='nav-btn' onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-links">
              <Link to="/user">Dashboard</Link>
              <Link to="/take">Take Quiz</Link>
              <Link to="/results">See Results</Link>
              <button className='nav-btn' onClick={handleLogout}>Logout</button>
            </div>
=======
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : user.role === 'admin' ? (
          <>
          
          <Link to="/admin">Dashboard</Link>
            <Link to="/create">Add Questions</Link>
            <Link to="/results">See User Details</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/user">Dashboard</Link>
            <Link to="/take">Take Quiz</Link>
            <Link to="/results">See Results</Link>
            <button id="logout" onClick={handleLogout}>Logout</button>
>>>>>>> 2ea07870b338e365a7a6a5df93480f70d20fcae2
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




