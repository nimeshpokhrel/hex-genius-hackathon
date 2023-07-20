import jwt from "jsonwebtoken";

export const CheckAccess = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Not Authorized" });
      } else {
        next();
      }
    });
  } catch (err) {
    return res.status(403).json({ error: "Not Authorized" });
  }
};
