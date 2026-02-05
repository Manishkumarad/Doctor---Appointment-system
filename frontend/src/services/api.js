import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me')
};

// User API
export const userAPI = {
  getAllUsers: () => api.get('/users'),
  getPatients: () => api.get('/users/patients'),
  getDoctors: () => api.get('/users/doctors'),
  getUser: (id) => api.get(`/users/${id}`)
};

// Appointment API
export const appointmentAPI = {
  bookAppointment: (appointmentData) => api.post('/appointments', appointmentData),
  getAppointments: () => api.get('/appointments'),
  getAppointment: (id) => api.get(`/appointments/${id}`),
  cancelAppointment: (id) => api.put(`/appointments/${id}/cancel`),
  updateStatus: (id, status) => api.put(`/appointments/${id}/status`, { status })
};

export default api;
