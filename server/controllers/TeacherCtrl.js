const ScheduleModel = require("../models/ScheduleModel");
const TeacherModel = require("../models/TeacherModel");
const userModel = require("../models/userModels");
const getTeacherInfoController = async (req, res) => {
  try {
    const Teacher = await TeacherModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Teacher data fetch success",
      data: Teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Teacher Details",
    });
  }
};

// update teacher profile
const updateProfileController = async (req, res) => {
  try {
    const Teacher = await TeacherModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Teacher Profile Updated",
      data: Teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Teacher Profile Update issue",
      error,
    });
  }
};

//get single teacher
const getTeacherByIdController = async (req, res) => {
  try {
    const Teacher = await TeacherModel.findOne({ _id: req.body.TeacherId });
    res.status(200).send({
      success: true,
      message: "Sigle Teacher Info Fetched",
      data: Teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Erro in Single Teacher info",
    });
  }
};

const TeacherSchedulesController = async (req, res) => {
  try {
    const Teacher = await TeacherModel.findOne({ userId: req.body.userId });
    const Schedules = await ScheduleModel.find({
      TeacherId: Teacher._id,
    });
    res.status(200).send({
      success: true,
      message: "Teacher Schedules fetch Successfully",
      data: Schedules,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in teacher Schedules",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { SchedulesId, status } = req.body;
    const Schedules = await ScheduleModel.findByIdAndUpdate(SchedulesId, {
      status,
    });
    const user = await userModel.findOne({ _id: Schedules.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `your Schedule has been updated ${status}`,
      onCLickPath: "/Teacher-Schedules",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Schedule Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getTeacherInfoController,
  updateProfileController,
  getTeacherByIdController,
  TeacherSchedulesController,
  updateStatusController,
};
