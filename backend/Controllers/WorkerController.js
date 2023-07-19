import WorkerModel from "../Models/WorkerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const WorkerSignupHandler = async (req, res) => {
  const { firstName, lastName, email, password, city, street, phone, service } =
    req.body;
  const user = await WorkerModel.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ error: "Sorry, user with the email already exist !" });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const createdUser = new WorkerModel({
    firstName,
    lastName,
    email,
    password: hashPassword,
    city,
    street,
    phone,
    service
  });
  await createdUser.save();

  const findUser = await WorkerModel.findOne({ email });

  const token = jwt.sign(findUser.id, process.env.JWT);

  return res.status(200).json({ user: findUser, token });
};

export const WorkerLoginHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await WorkerModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Sorry, credentials incorrect !" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(400).json({ error: "Sorry, credentials incorrect !" });
  }

  const token = jwt.sign(user.id, process.env.JWT);

  return res.status(200).json({ user, token });
};
