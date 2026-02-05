import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/dashboard')}>
        <h2>🏥 Hospital System</h2>
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate('/dashboard')} className="nav-link">
          Dashboard
        </button>
        {user?.role === 'patient' && (
          <button onClick={() => navigate('/book-appointment')} className="nav-link">
            Book Appointment
          </button>
        )}
        <button onClick={() => navigate('/appointments')} className="nav-link">
          Appointments
        </button>
        <button onClick={() => navigate('/doctors')} className="nav-link">
          Doctors
        </button>
        {user?.role === 'doctor' && (
          <button onClick={() => navigate('/patients')} className="nav-link">
            Patients
          </button>
        )}
      </div>
      <div className="navbar-menu">
        <span className="user-info">
          {user?.name} ({user?.role})
        </span>
        <button onClick={handleLogout} className="btn btn-logout">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
