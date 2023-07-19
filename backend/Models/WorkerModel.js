import mongoose from "mongoose";

const WorkerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      enum: ["plumber", "electrician", "carpenter"],
    },
    idImage: {
      type: String,
    },
    userType: {
      type: String,
      default: "worker",
    },
    userStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const WorkerModel = mongoose.model("worker", WorkerSchema);

export default WorkerModel;
