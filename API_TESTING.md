# API Testing Guide

## Testing with Postman or Thunder Client

### 1. Register a Doctor

**Endpoint:** `POST http://localhost:5000/api/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Dr. Sarah Johnson",
  "email": "sarah.johnson@hospital.com",
  "password": "doctor123",
  "role": "doctor",
  "phone": "555-0101",
  "specialization": "Cardiology",
  "experience": 12,
  "address": "123 Medical Center, New York"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Doctor registered successfully",
  "data": {
    "_id": "...",
    "name": "Dr. Sarah Johnson",
    "email": "sarah.johnson@hospital.com",
    "role": "doctor",
    "phone": "555-0101",
    "specialization": "Cardiology",
    "experience": 12,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Register a Patient

**Endpoint:** `POST http://localhost:5000/api/auth/register`

**Body:**
```json
{
  "name": "John Smith",
  "email": "john.smith@email.com",
  "password": "patient123",
  "role": "patient",
  "phone": "555-0202",
  "address": "456 Main Street, Boston"
}
```

### 3. Login

**Endpoint:** `POST http://localhost:5000/api/auth/login`

**Body:**
```json
{
  "email": "john.smith@email.com",
  "password": "patient123"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "...",
    "name": "John Smith",
    "email": "john.smith@email.com",
    "role": "patient",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Note:** Copy the token from the response for protected routes.

### 4. Get All Doctors

**Endpoint:** `GET http://localhost:5000/api/users/doctors`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

**Expected Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "...",
      "name": "Dr. Sarah Johnson",
      "email": "sarah.johnson@hospital.com",
      "role": "doctor",
      "phone": "555-0101",
      "specialization": "Cardiology",
      "experience": 12
    }
  ]
}
```

### 5. Book Appointment

**Endpoint:** `POST http://localhost:5000/api/appointments`

**Headers:**
```
Authorization: Bearer YOUR_PATIENT_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "doctorId": "DOCTOR_ID_FROM_DOCTORS_LIST",
  "appointmentDate": "2026-02-15",
  "appointmentTime": "10:00 AM",
  "reason": "Regular checkup",
  "notes": "First time consultation"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "_id": "...",
    "patient": {
      "name": "John Smith",
      "email": "john.smith@email.com",
      "phone": "555-0202"
    },
    "doctor": {
      "name": "Dr. Sarah Johnson",
      "specialization": "Cardiology"
    },
    "appointmentDate": "2026-02-15T00:00:00.000Z",
    "appointmentTime": "10:00 AM",
    "reason": "Regular checkup",
    "status": "scheduled"
  }
}
```

### 6. Get All Appointments

**Endpoint:** `GET http://localhost:5000/api/appointments`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
```

### 7. Cancel Appointment

**Endpoint:** `PUT http://localhost:5000/api/appointments/APPOINTMENT_ID/cancel`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Appointment cancelled successfully",
  "data": {
    "_id": "...",
    "status": "cancelled"
  }
}
```

### 8. Update Appointment Status (Doctor Only)

**Endpoint:** `PUT http://localhost:5000/api/appointments/APPOINTMENT_ID/status`

**Headers:**
```
Authorization: Bearer YOUR_DOCTOR_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "status": "completed"
}
```

## Testing Workflow

1. Register a doctor account
2. Register a patient account
3. Login as patient (save the token)
4. Get list of doctors
5. Book an appointment with a doctor
6. View appointments
7. Cancel appointment (optional)
8. Login as doctor (save the token)
9. View appointments as doctor
10. Update appointment status to completed

## Error Responses

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Not authorized to access this route. Please login."
}
```

**400 Bad Request:**
```json
{
  "success": false,
  "message": "This time slot is already booked. Please choose another time."
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "Appointment not found"
}
```

## Notes

- All protected routes require `Authorization: Bearer TOKEN` header
- Token expires in 7 days by default
- Doctors can only update status to 'completed'
- Both patients and doctors can cancel appointments
- Appointment time slots are validated to prevent double booking
