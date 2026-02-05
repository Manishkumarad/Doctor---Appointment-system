# Hospital Appointment System

A full-stack web application for managing hospital appointments built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

### User Management
- **User Registration**: Register as either a Patient or Doctor
- **User Authentication**: Secure login with JWT tokens
- **Role-based Access**: Different features for patients and doctors

### For Patients
- Book appointments with available doctors
- View all personal appointments
- Cancel appointments
- Browse list of all doctors with their specializations
- View doctor details (specialization, experience, contact info)

### For Doctors
- View all scheduled appointments
- Update appointment status (mark as completed)
- Cancel appointments
- View list of all registered patients
- Access patient contact information

### Appointment Management
- **Book Appointment**: Select doctor, date, time, and reason for visit
- **View Appointments**: See all appointments with detailed information
- **Cancel Appointment**: Cancel scheduled appointments
- **Status Tracking**: Track appointment status (scheduled, completed, cancelled)

## Tech Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing

### Frontend
- **React**: UI library
- **React Router**: Navigation
- **Axios**: HTTP client
- **React Toastify**: Notifications
- **CSS3**: Styling

## Project Structure

```
hospital-appointment-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── appointmentController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Appointment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── appointmentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   ├── BookAppointment.js
    │   │   ├── Appointments.js
    │   │   ├── DoctorsList.js
    │   │   ├── PatientsList.js
    │   │   ├── Navbar.js
    │   │   └── [CSS files]
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Users
- `GET /api/users` - Get all users (Protected)
- `GET /api/users/patients` - Get all patients (Protected)
- `GET /api/users/doctors` - Get all doctors (Protected)
- `GET /api/users/:id` - Get single user (Protected)

### Appointments
- `POST /api/appointments` - Book appointment (Protected)
- `GET /api/appointments` - Get appointments (Protected)
- `GET /api/appointments/:id` - Get single appointment (Protected)
- `PUT /api/appointments/:id/cancel` - Cancel appointment (Protected)
- `PUT /api/appointments/:id/status` - Update status (Protected - Doctor only)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hospital_appointment_db
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

4. Start the server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Usage

1. **Register**: Create an account as either a Patient or Doctor
2. **Login**: Use your credentials to login
3. **Dashboard**: View your profile and quick actions
4. **Book Appointment** (Patients): Select a doctor, date, time, and reason
5. **View Appointments**: See all your scheduled appointments
6. **Manage Appointments**: Cancel or update status as needed

## Default Users (For Testing)

After starting the application, you can register new users or use these test credentials if you seed the database:

**Patient:**
- Email: patient@test.com
- Password: password123

**Doctor:**
- Email: doctor@test.com
- Password: password123

## Features Implemented

✅ User Registration (Patient/Doctor)
✅ User Authentication with JWT
✅ View all Patients
✅ View all Doctors
✅ Book Appointments
✅ Cancel Appointments
✅ View Appointments
✅ Role-based Access Control
✅ Responsive Design
✅ Toast Notifications
✅ Protected Routes

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Role-based authorization
- Input validation

## Future Enhancements

- Email notifications
- Appointment reminders
- Doctor availability calendar
- Patient medical history
- Prescription management
- Video consultation
- Payment integration
- Admin dashboard
- Report generation

## License

This project is open source and available for educational purposes.

## Support

For any queries or issues, please contact the development team.
