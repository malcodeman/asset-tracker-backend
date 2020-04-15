import User from "./usersModel";

async function create(values) {
  const user = await User.create(values);

  return user;
}

async function findAll(where) {
  const users = await User.findAll(where);

  return users;
}

async function update(values, options) {
  const user = await User.update(values, options);

  return user;
}

export { create, findAll, update };

export default {
  create,
  findAll,
  update,
};
