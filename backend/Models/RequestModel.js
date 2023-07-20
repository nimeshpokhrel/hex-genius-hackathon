import mongoose, { Schema } from "mongoose";

const RequestSchema = mongoose.Schema({
  clientID: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  workerID: {
    type: Schema.Types.ObjectId,
    ref: "worker",
  },
  message: {
    type: String,
  },
  workID: {
    type: Schema.Types.ObjectId,
    ref: "work",
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  pending: {
    type: Boolean,
    default: true,
  },
});

const RequestModel = mongoose.model("request", RequestSchema);

export default RequestModel;
