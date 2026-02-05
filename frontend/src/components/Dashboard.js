import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>🏥 Hospital System</h2>
        </div>
        <div className="navbar-menu">
          <span className="user-info">
            Welcome, <strong>{user?.name}</strong> ({user?.role})
          </span>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Dashboard</h1>
        
        <div className="user-profile-card">
          <h3>Your Profile</h3>
          <div className="profile-info">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <p><strong>Phone:</strong> {user?.phone}</p>
            {user?.role === 'doctor' && (
              <>
                <p><strong>Specialization:</strong> {user?.specialization}</p>
                <p><strong>Experience:</strong> {user?.experience} years</p>
              </>
            )}
            {user?.address && <p><strong>Address:</strong> {user?.address}</p>}
          </div>
        </div>

        <div className="dashboard-actions">
          <h3>Quick Actions</h3>
          <div className="action-cards">
            {user?.role === 'patient' && (
              <div className="action-card" onClick={() => navigate('/book-appointment')}>
                <div className="card-icon">📅</div>
                <h4>Book Appointment</h4>
                <p>Schedule an appointment with a doctor</p>
              </div>
            )}

            <div className="action-card" onClick={() => navigate('/appointments')}>
              <div className="card-icon">📋</div>
              <h4>My Appointments</h4>
              <p>View and manage your appointments</p>
            </div>

            <div className="action-card" onClick={() => navigate('/doctors')}>
              <div className="card-icon">👨‍⚕️</div>
              <h4>View Doctors</h4>
              <p>Browse available doctors</p>
            </div>

            {user?.role === 'doctor' && (
              <div className="action-card" onClick={() => navigate('/patients')}>
                <div className="card-icon">👥</div>
                <h4>View Patients</h4>
                <p>See all registered patients</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
