import mongoose, { Schema } from "mongoose";

const WorkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    worker: {
      type: Schema.Types.ObjectId,
      ref: "worker",
    },
    service: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WorkModel = mongoose.model("work", WorkSchema);

export default WorkModel;
