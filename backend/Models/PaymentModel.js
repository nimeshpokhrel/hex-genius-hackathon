import mongoose, { Schema } from "mongoose";

const PaymentSchema = mongoose.Schema({
  pidx: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  amount: {
    type: Number,
    required: true,
  },
});

const PaymentModel = mongoose.model("payment", PaymentSchema);

export default PaymentModel;
