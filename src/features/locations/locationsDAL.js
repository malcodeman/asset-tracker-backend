import Location from "./locationsModel";

async function create(values, options) {
  const location = await Location.create(values, options);

  return location;
}

async function findAll(where) {
  const locations = await Location.findAll(where);

  return locations;
}

async function destroy(options) {
  const location = await Location.destroy(options);

  return location;
}

export { create, findAll, destroy };

export default {
  create,
  findAll,
  destroy,
};
