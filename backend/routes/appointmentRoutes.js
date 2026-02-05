const express = require('express');
const router = express.Router();
const {
  bookAppointment,
  getAppointments,
  getAppointment,
  cancelAppointment,
  updateAppointmentStatus
} = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/auth');

// All routes are protected
router.use(protect);

router.post('/', bookAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointment);
router.put('/:id/cancel', cancelAppointment);
router.put('/:id/status', authorize('doctor'), updateAppointmentStatus);

module.exports = router;
