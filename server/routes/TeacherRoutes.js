const express = require("express");
const {
  getTeacherInfoController,
  updateProfileController,
  getTeacherByIdController,
  TeacherSchedulesController,
  updateStatusController,
} = require("../controllers/TeacherCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getTeacherInfo", authMiddleware, getTeacherInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getTeacherById", authMiddleware, getTeacherByIdController);

//GET Schedules
router.get("/Teacher-Schedules", authMiddleware, TeacherSchedulesController);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
