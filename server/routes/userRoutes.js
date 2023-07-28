const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyTeacherController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllTeachersController,
  bookeScheduleController,
  bookingAvailabilityController,
  userSchedulesController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Teacher || POST
router.post("/apply-Teacher", authMiddleware, applyTeacherController);

//Notifiaction  Teacher || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Teacher || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllTeachers", authMiddleware, getAllTeachersController);

//BOOK Schedule
router.post("/book-Schedule", authMiddleware, bookeScheduleController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Schedules List
router.get("/user-Schedules", authMiddleware, userSchedulesController);

module.exports = router;
