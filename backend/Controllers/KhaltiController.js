import jwt from "jsonwebtoken";
import UserModel from "../Models/UserModel.js";
import PaymentModel from "../Models/PaymentModel.js";

export const KhaltiHandler = async (req, res) => {
  const { pidx } = req.query;

  if (pidx) {
    const pytRecord = await PaymentModel.findOne({ pidx: pidx });
    const user = await UserModel.findOne({ _id: pytRecord.userID });

    user.balance = user.balance + pytRecord.amount / 100;

    await user.save();
    res.status(200).redirect("http://localhost:3000");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    const clientID = jwt.verify(token, process.env.JWT);

    const { amount } = req.body;

    const payload = {
      return_url: "http://localhost:4000/verify-transaction/",
      website_url: "http://localhost:4000/",
      amount: amount * 100,
      purchase_order_id: "y774fg85yu4545",
      purchase_order_name: "dfdbhjdgfy8dgfu",
      error_key: "fhgbjgjrt56",
    };

    const preData = await fetch(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Key ${process.env.KHALTI_SECRET}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const formatResponse = await preData.json();

    console.log(formatResponse);

    const paymentRecord = new PaymentModel({
      pidx: formatResponse.pidx,
      userID: clientID,
      amount: payload.amount,
    });

    await paymentRecord.save();

    res.status(200).json(formatResponse);
  }
};
