import React, { useState, useEffect } from 'react';
import { userAPI } from '../services/api';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import './DoctorsList.css';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await userAPI.getDoctors();
      setDoctors(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch doctors');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <div className="loading">Loading doctors...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <div className="doctors-container">
          <h1>👨‍⚕️ Our Doctors</h1>

          {doctors.length === 0 ? (
            <div className="no-doctors">
              <p>No doctors available at the moment.</p>
            </div>
          ) : (
            <div className="doctors-grid">
              {doctors.map((doctor) => (
                <div key={doctor._id} className="doctor-card">
                  <div className="doctor-avatar">
                    👨‍⚕️
                  </div>
                  <h3>Dr. {doctor.name}</h3>
                  <p className="specialization">{doctor.specialization}</p>
                  
                  <div className="doctor-info">
                    <div className="info-item">
                      <strong>Experience:</strong>
                      <span>{doctor.experience} years</span>
                    </div>
                    <div className="info-item">
                      <strong>Email:</strong>
                      <span>{doctor.email}</span>
                    </div>
                    <div className="info-item">
                      <strong>Phone:</strong>
                      <span>{doctor.phone}</span>
                    </div>
                    {doctor.address && (
                      <div className="info-item">
                        <strong>Address:</strong>
                        <span>{doctor.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
