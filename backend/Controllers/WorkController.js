import WorkModel from "../Models/WorkModel.js";
import WorkerModel from "../Models/WorkerModel.js";
import RequestModel from "../Models/RequestModel.js";

import jwt from "jsonwebtoken";

export const GetWorkFromCategory = async (req, res) => {
  const { category } = req.body;
  const works = await WorkModel.find({ service: { $in: category } }).populate(
    "worker"
  );
  if (!works) {
    return res
      .status(404)
      .json({ error: "No works available for the selected category !" });
  }
  return res.status(200).json(works);
};

export const HireWorker = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const clientID = jwt.verify(token, process.env.JWT);

  const { workID, message } = req.body;
  const workDetails = await WorkModel.findById(workID);

  const rate = workDetails.rate;

  

  const duplicateCheck = await RequestModel.find({
    clientID: clientID,
    workID: workID,
  });

  console.log(duplicateCheck);

  if (duplicateCheck.length !== 0) {
    for (var item in duplicateCheck) {
      if (
        (!duplicateCheck[item].accepted && !duplicateCheck[item].pending) ||
        (duplicateCheck[item].accepted && duplicateCheck[item].completed)
      ) {
        const delDataID = duplicateCheck[item].id;
        await RequestModel.deleteOne({ _id: delDataID });
      }
    }
    return res
      .status(403)
      .json({ error: "Error: Already sent invitation for hire !" });
  }

  const newRequest = new RequestModel({
    clientID,
    workID,
    workerID: workDetails.worker,
    message,
  });

  const data = await newRequest.save();

  return res.status(200).json(data);
};

export const ListSentInvite = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const clientID = jwt.verify(token, process.env.JWT);

  const getInvites = await RequestModel.find({ clientID })
    .populate("workerID")
    .populate("workID");

  return res.status(200).json(getInvites);

  // if(!getInvites) return res.status(403).json({error: "No "})
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

  if (!workerData.userStatus) {
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
      .json({ error: "Error: Your job listing limit has been reached !" });
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

export const AcceptRequest = async (req, res) => {
  const { requestID } = req.body;

  const request = await RequestModel.findById(requestID);

  request.pending = false;
  request.accepted = true;

  await request.save();

  console.log(request);

  return res.status(200).json(request);
};

export const RejectRequest = async (req, res) => {
  const { requestID } = req.body;

  const request = await RequestModel.findById(requestID);

  request.pending = false;
  request.accepted = false;

  await request.save();

  return res.status(200).json(request);
};

export const RequestCompleted = async (req, res) => {
  const { requestID } = req.body;

  const request = await RequestModel.findById(requestID);

  request.completed = true;

  await request.save();

  return res.status(200).json(request);
};

export const CancelInviteHandler = async (req, res) => {
  const { workID } = req.body;

  const workData = await RequestModel.findById(workID);

  workData.accepted = false;
  workData.pending = false;

  await workData.save();

  res.status(200).json(workData);
};
