import WorkModel from "../Models/WorkModel.js";
import WorkerModel from "../Models/WorkerModel.js";
import RequestModel from "../Models/RequestMode.js";
import UserModel from "../Models/UserModel.js";

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

export const AddUserWork = async (req, res) => {
  const { title, description, rate, user } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const userID = jwt.verify(token, process.env.JWT);
  const work = await WorkModel.find({ worker: userID });

  const workerData = await WorkerModel.findById(userID);

  if (!user.userStatus || workerData.userStatus) {
    return res
      .status(403)
      .json({ error: "Your account is not approved yet !" });
  }

  if (work !== null && work.length < 3) {
    const createdWork = new WorkModel({
      title,
      description,
      rate: Number(rate),
      worker: userID,
      service: user.service,
    });
    await createdWork.save();
    return res.status(200).json(createdWork);
  } else {
    return res
      .status(403)
      .json({ error: "Your Job Listing Limit has reached !" });
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

export const ListWorkRequests = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const workerID = jwt.verify(token, process.env.JWT);

  const requests = await RequestModel.find({ workerID: workerID })
    .populate("clientID")
    .populate("workID")
    .exec();
  if (!requests)
    return res.status(404).json({ error: "No job requests available !" });

  return res.status(200).json(requests);
};
