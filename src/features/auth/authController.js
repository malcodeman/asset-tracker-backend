import utils from "../../utils";
import usersDAL from "../users/usersDAL";

async function signup(req, res) {
  try {
    const { email, password } = req.body;
    const hash = await utils.password.hash(password);
    const values = {
      email,
      password: hash,
    };
    const user = await usersDAL.create(values);
    const payload = { id: user.id };
    const token = utils.jwt.sign(payload);
    const response = {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export { signup };

export default {
  signup,
};
