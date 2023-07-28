const TeacherModel = require("../models/TeacherModel");
const userModel = require("../models/userModels");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllTeachersController = async (req, res) => {
  try {
    const Teachers = await TeacherModel.find({});
    res.status(200).send({
      success: true,
      message: "Teachers Data list",
      data: Teachers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting Teachers data",
      error,
    });
  }
};

// Teacher account status
const changeAccountStatusController = async (req, res) => {
  try {
    const { TeacherId, status } = req.body;
    const Teacher = await TeacherModel.findByIdAndUpdate(TeacherId, { status });
    const user = await userModel.findOne({ _id: Teacher.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "Teacher-account-request-updated",
      message: `Your Teacher Account Request Has ${status} `,
      onClickPath: "/notification",
    });
    user.isTeacher = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: Teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Account Status",
      error,
    });
  }
};

module.exports = {
  getAllTeachersController,
  getAllUsersController,
  changeAccountStatusController,
};
