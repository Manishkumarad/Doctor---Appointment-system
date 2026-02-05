# Screenshots Guide

## Application Screenshots

Since this is a code delivery, actual screenshots cannot be generated. However, here's what you'll see when you run the application:

### 1. Login Page
- URL: `http://localhost:3000/login`
- Features:
  - Email and password input fields
  - Login button
  - Link to registration page
  - Purple gradient background
  - Hospital emoji icon

### 2. Registration Page
- URL: `http://localhost:3000/register`
- Features:
  - Full name, email, password fields
  - Phone number field
  - Role selection (Patient/Doctor dropdown)
  - Conditional fields for doctors (specialization, experience)
  - Address textarea
  - Register button
  - Link to login page

### 3. Dashboard
- URL: `http://localhost:3000/dashboard`
- Features:
  - Top navigation bar with Hospital System branding
  - Welcome message with user name and role
  - Logout button
  - User profile card showing all personal information
  - Quick action cards:
    * Book Appointment (for patients)
    * My Appointments
    * View Doctors
    * View Patients (for doctors only)

### 4. Book Appointment Page (Patient View)
- URL: `http://localhost:3000/book-appointment`
- Features:
  - Doctor selection dropdown
  - Date picker (only future dates allowed)
  - Time slot dropdown
  - Reason for visit input
  - Additional notes textarea
  - Cancel and Book buttons

### 5. My Appointments Page
- URL: `http://localhost:3000/appointments`
- Features:
  - List of all appointments
  - Each appointment card shows:
    * Doctor/Patient name
    * Specialization (for patients view)
    * Date and time
    * Reason for visit
    * Status badge (scheduled/completed/cancelled)
    * Contact information
  - Action buttons:
    * Cancel Appointment (if scheduled)
    * Mark Complete (for doctors, if scheduled)

### 6. Doctors List Page
- URL: `http://localhost:3000/doctors`
- Features:
  - Grid layout of doctor cards
  - Each card shows:
    * Doctor emoji avatar
    * Doctor name
    * Specialization
    * Years of experience
    * Email and phone
    * Address
  - Hover effects on cards

### 7. Patients List Page (Doctor View Only)
- URL: `http://localhost:3000/patients`
- Features:
  - Table layout of all patients
  - Columns:
    * Name
    * Email
    * Phone
    * Address
    * Registration Date
  - Responsive table with scroll on mobile

## How to Capture Screenshots

1. **Start the Application:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm start
   
   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

2. **Register Test Users:**
   - Create a doctor account
   - Create a patient account

3. **Navigate and Capture:**
   - Use your OS screenshot tool (Windows: Win+Shift+S, Mac: Cmd+Shift+4)
   - Visit each page listed above
   - Capture screenshots of each page
   - Save them in a "screenshots" folder

4. **Recommended Screenshots:**
   - Login page
   - Registration page (both roles)
   - Patient dashboard
   - Doctor dashboard
   - Book appointment form
   - Appointments list (patient view)
   - Appointments list (doctor view)
   - Doctors list
   - Patients list

## Video Recording Suggestion

To create a demo video:

1. **Use Screen Recording Software:**
   - Windows: Xbox Game Bar (Win+G), OBS Studio
   - Mac: QuickTime Player, OBS Studio
   - Online: Loom, ScreenRec

2. **Recording Script:**
   - Introduction to the application
   - Show login page
   - Register a doctor account
   - Show doctor dashboard and features
   - Logout and register a patient account
   - Show patient dashboard
   - Book an appointment
   - View appointments
   - Switch to doctor view
   - Show doctor viewing appointments
   - Mark appointment as complete
   - Show doctors and patients lists
   - Conclusion

3. **Video Length:** 3-5 minutes
4. **Export:** MP4 format, 1080p recommended

## Color Scheme
- Primary: Purple gradient (#667eea to #764ba2)
- Success: Green (#4caf50)
- Error: Red (#f44336)
- Info: Blue (#2196f3)
- Background: Light gray (#f5f5f5)
- Cards: White with shadow
