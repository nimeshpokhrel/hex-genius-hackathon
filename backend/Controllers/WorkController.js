import WorkModel from "../Models/WorkModel.js";
import jwt from "jsonwebtoken";

export const GetWorkFromCategory = async (req, res) => {
  const works = await WorkModel.find({ service: { $in: req.query.category } });
  if (!works) {
    return res
      .status(404)
      .json({ error: "No works available for the selected category !" });
  }
  return res.status(200).json(works);
};

export const GetAllUserWork = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const userID = jwt.verify(token, process.env.JWT);

  const works = await WorkModel.find({ worker: { $in: userID } });
  if (!works) {
    return res.status(404).json({ error: "No Posts Found" });
  } else {
    return res.status(200).json(works);
  }
};

export const DelUserWork = async (req, res) => {
  const { id } = req.params;
  const work = await WorkModel.findById(id);
  if (!work) return res.status(403).json({ error: "The work was not found !" });
  await WorkModel.deleteOne({ _id: id });
  return res.status(200);
};

export const EditUserWork = async (req, res) => {
  const { id } = req.params;
  const work = await WorkModel.findById(id);
  if (!work) return res.status(403).json({ error: "The work was not found !" });
  work.title = req.body.title;
  work.description = req.body.description;
  work.rate = req.body.rate;

  await work.save();

  return res.status(200);
};
