import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const ClientSignupHandler = async (req, res) => {
  const { firstName, lastName, email, password, city, street, phone } =
    req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "Sorry, user with the email already exist !" });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const createdUser = new UserModel({
    firstName,
    lastName,
    email,
    password: hashPassword,
    city,
    street,
    phone,
  });
  await createdUser.save();

  const findUser = await UserModel.findOne({ email });

  const token = jwt.sign(findUser.id, process.env.JWT);

  return res.status(200).json({ user: findUser, token });
};

export const ClientLoginHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
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
