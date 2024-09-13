<<<<<<< HEAD
import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';  
import './AdminDashboard.css';   

const AdminDashboard = () => {  
  const navigate = useNavigate();   

  const handleViewLeaderboard = () => {  
    navigate('/leaderboard');  
  };  

  const handleCreateQuiz = () => {  
    navigate('/create');  
  };  

  return (  
    <div className="dashboard-container">  
      <div className="hero-section">  
        <h1 className="hero-title">Admin Dashboard</h1>  
        <p className="hero-subtitle">Manage your quiz platform with ease.</p>  
      </div>  
      <div className="dashboard-content">  
        <div className="dashboard-stats">  
          <div className="stat-card">  
            <h2>Tool Management</h2>  
            <p className="stat-value">7,711</p>  
            <p className="stat-description">Number of users</p>  
          </div>  
          <div className="stat-card">  
            <h2>Quiz Creation</h2>  
            <p className="stat-value">31,50</p>  
            <p className="stat-description">Active Quizzes</p>  
          </div>  
          <div className="stat-card">  
            <h2>Average Quiz Completion Time</h2>  
            <p className="stat-value">1562</p>  
            <p className="stat-description">Average quiz completion time</p>  
          </div>  
          <div className="stat-card">  
            <h2>Leaderboard</h2>  
            <p className="stat-value">619m</p>  
            <p className="stat-description">Top scores</p>  
          </div>  
        </div>  
        <div className="dashboard-actions">  
          <button className="dashboard-button" onClick={handleCreateQuiz}>  
            Add Questions  
          </button>  
          <button className="dashboard-button" onClick={handleViewLeaderboard}>  
            View Leaderboard  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default AdminDashboard;
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Importing the CSS

const AdminDashboard = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleTakeQuiz = () => {
    navigate('/take'); // Navigate to the quiz-taking page
  };

  const handleViewResults = () => {
    navigate('/results'); // Navigate to the quiz results page
  };
  
  const handleCreateQuiz = () => {
    navigate('/create');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <p className="dashboard-subtitle">A modern and clean Admin Dashboard</p>
      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={handleCreateQuiz}>
          Add Questions
        </button>
        <button className="dashboard-button" onClick={handleViewResults}>
          View User Details
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
>>>>>>> 2ea07870b338e365a7a6a5df93480f70d20fcae2
