import utils from "../../utils";
import usersDAL from "../users/usersDAL";

async function signup(req, res) {
  try {
    const { values } = req.body;
    const users = await usersDAL.findAll({
      raw: true,
      where: { email: values.email },
    });

    if (Array.isArray(users) && users.length) {
      res.status(400).send({ exception: "EmailAlreadyInUseException" });
      return;
    }

    const hash = await utils.password.hash(values.password);
    const user = await usersDAL.create({ ...values, password: hash });
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

async function signin(req, res) {
  try {
    const { email, password } = req.body;
    const users = await usersDAL.findAll({ raw: true, where: { email } });

    if (!Array.isArray(users) || !users.length) {
      res.status(400).send({ exception: "UserNotFoundException" });
      return;
    }

    const user = users[0];
    const verified = await utils.password.verify(user.password, password);

    if (verified) {
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
    } else {
      res.status(401).send({ exception: "NotAuthorizedException" });
    }
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export { signup, signin };

export default {
  signup,
  signin,
};
