const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    TeacherId: {
      type: String,
      required: true,
    },
    TeacherInfo: {
      type: String,
      required: true,
    },
    userInfo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ScheduleModel = mongoose.model("Schedules", ScheduleSchema);

module.exports = ScheduleModel;
