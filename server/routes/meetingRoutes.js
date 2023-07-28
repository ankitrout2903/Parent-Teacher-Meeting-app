// meetingRoutes.js

const express = require('express');
const router = express.Router();

const meetingController = require('../controllers/meetingController');

// Define meeting routes
router.get('/meetings', meetingController.getAllMeetings);
router.get('/meetings/:id', meetingController.getMeetingById);
router.post('/meetings', meetingController.createMeeting);
router.put('/meetings/:id', meetingController.updateMeeting);
router.delete('/meetings/:id', meetingController.deleteMeeting);

module.exports = router;
