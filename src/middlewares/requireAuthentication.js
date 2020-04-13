import utils from "../utils";

function requireAuthentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decoded = utils.jwt.verify(token);

    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).send(error);
  }
}

export { requireAuthentication };

export default {
  requireAuthentication,
};
