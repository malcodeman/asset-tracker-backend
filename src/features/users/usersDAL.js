import User from "./usersModel";

async function create(values) {
  const user = await User.create(values);

  return user;
}

export { create };

export default {
  create,
};
