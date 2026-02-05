const express = require('express');
const router = express.Router();
const {
  getPatients,
  getDoctors,
  getAllUsers,
  getUser
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// All routes are protected
router.use(protect);

router.get('/', getAllUsers);
router.get('/patients', getPatients);
router.get('/doctors', getDoctors);
router.get('/:id', getUser);

module.exports = router;
