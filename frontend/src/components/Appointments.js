import React, { useState, useEffect, useContext } from 'react';
import { appointmentAPI } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await appointmentAPI.getAppointments();
      setAppointments(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await appointmentAPI.cancelAppointment(id);
        toast.success('Appointment cancelled successfully');
        fetchAppointments();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to cancel appointment');
      }
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await appointmentAPI.updateStatus(id, status);
      toast.success('Appointment status updated');
      fetchAppointments();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      scheduled: 'status-badge scheduled',
      completed: 'status-badge completed',
      cancelled: 'status-badge cancelled'
    };
    return <span className={statusClasses[status]}>{status.toUpperCase()}</span>;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <div className="loading">Loading appointments...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <div className="appointments-container">
          <h1>📋 My Appointments</h1>

          {appointments.length === 0 ? (
            <div className="no-appointments">
              <p>No appointments found.</p>
            </div>
          ) : (
            <div className="appointments-list">
              {appointments.map((appointment) => (
                <div key={appointment._id} className="appointment-card">
                  <div className="appointment-header">
                    <div>
                      {user?.role === 'patient' ? (
                        <>
                          <h3>Dr. {appointment.doctor.name}</h3>
                          <p className="specialization">{appointment.doctor.specialization}</p>
                        </>
                      ) : (
                        <>
                          <h3>{appointment.patient.name}</h3>
                          <p className="patient-info">Patient</p>
                        </>
                      )}
                    </div>
                    {getStatusBadge(appointment.status)}
                  </div>

                  <div className="appointment-details">
                    <div className="detail-item">
                      <span className="icon">📅</span>
                      <div>
                        <strong>Date:</strong>
                        <p>{formatDate(appointment.appointmentDate)}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <span className="icon">🕐</span>
                      <div>
                        <strong>Time:</strong>
                        <p>{appointment.appointmentTime}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <span className="icon">📝</span>
                      <div>
                        <strong>Reason:</strong>
                        <p>{appointment.reason}</p>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="detail-item">
                        <span className="icon">💬</span>
                        <div>
                          <strong>Notes:</strong>
                          <p>{appointment.notes}</p>
                        </div>
                      </div>
                    )}

                    {user?.role === 'patient' ? (
                      <div className="detail-item">
                        <span className="icon">📞</span>
                        <div>
                          <strong>Doctor's Contact:</strong>
                          <p>{appointment.doctor.phone}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="detail-item">
                        <span className="icon">📞</span>
                        <div>
                          <strong>Patient's Contact:</strong>
                          <p>{appointment.patient.phone}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="appointment-actions">
                    {appointment.status === 'scheduled' && (
                      <>
                        {user?.role === 'doctor' && (
                          <button
                            onClick={() => handleUpdateStatus(appointment._id, 'completed')}
                            className="btn btn-success"
                          >
                            Mark Complete
                          </button>
                        )}
                        <button
                          onClick={() => handleCancelAppointment(appointment._id)}
                          className="btn btn-danger"
                        >
                          Cancel Appointment
                        </button>
                      </>
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

export default Appointments;
