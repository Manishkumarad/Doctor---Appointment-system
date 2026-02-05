# Hospital Appointment System - Setup Guide

## Quick Start Guide

### Step 1: Install MongoDB

**Option A: Local MongoDB Installation**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install MongoDB following the installation wizard
3. Start MongoDB service:
   - Windows: MongoDB will start automatically as a service
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update the MONGODB_URI in backend/.env with your Atlas connection string

### Step 2: Backend Setup

1. Open terminal/command prompt
2. Navigate to the backend folder:
```bash
cd hospital-appointment-system/backend
```

3. Install dependencies:
```bash
npm install
```

4. Verify .env file configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hospital_appointment_db
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
```

5. Start the backend server:
```bash
npm start
```

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Step 3: Frontend Setup

1. Open a NEW terminal/command prompt window
2. Navigate to the frontend folder:
```bash
cd hospital-appointment-system/frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the frontend development server:
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

## Testing the Application

### Create Test Users

**Register as a Doctor:**
1. Click "Register here"
2. Fill in the form:
   - Name: Dr. John Smith
   - Email: doctor@test.com
   - Password: password123
   - Phone: 1234567890
   - Register As: Doctor
   - Specialization: Cardiology
   - Experience: 10
   - Address: 123 Medical Street
3. Click "Register"

**Register as a Patient:**
1. Logout and click "Register here"
2. Fill in the form:
   - Name: Jane Doe
   - Email: patient@test.com
   - Password: password123
   - Phone: 9876543210
   - Register As: Patient
   - Address: 456 Patient Avenue
3. Click "Register"

### Test Appointment Booking

1. Login as Patient (patient@test.com)
2. Click "Book Appointment"
3. Select doctor, date, time, and reason
4. Submit the form
5. View appointment in "My Appointments"

### Test Doctor View

1. Login as Doctor (doctor@test.com)
2. View appointments in "My Appointments"
3. Mark appointment as completed or cancel it
4. View patient list in "View Patients"

## Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check if port 27017 is not blocked
- Verify MONGODB_URI in .env file

**Port Already in Use:**
- Change PORT in .env to another port (e.g., 5001)
- Kill the process using port 5000

### Frontend Issues

**Cannot Connect to Backend:**
- Ensure backend is running on port 5000
- Check if proxy is set correctly in package.json
- Clear browser cache

**Module Not Found:**
- Delete node_modules folder
- Delete package-lock.json
- Run `npm install` again

### Common Errors

**JWT Token Error:**
- Logout and login again
- Clear localStorage in browser DevTools

**CORS Error:**
- Ensure cors is enabled in backend
- Check if frontend proxy is configured

## Production Deployment

### Backend Deployment (Heroku Example)

1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create app: `heroku create hospital-appointment-api`
4. Set environment variables:
```bash
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set JWT_SECRET=your_secure_secret
```
5. Deploy: `git push heroku main`

### Frontend Deployment (Generic)

1. Update API_URL in `frontend/src/services/api.js` to your backend URL
2. Build: `npm run build`
3. Deploy the `frontend/build` folder to your preferred static hosting provider

## Additional Notes

- Default backend port: 5000
- Default frontend port: 3000
- Database name: hospital_appointment_db
- JWT expiry: 7 days

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check environment variables
5. Restart both servers

For more help, refer to the main README.md file.
