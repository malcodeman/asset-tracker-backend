import Vendor from "./vendorsModel";

async function create(values, options) {
  const vendor = await Vendor.create(values, options);

  return vendor;
}

async function findAll(where) {
  const vendors = await Vendor.findAll(where);

  return vendors;
}

async function destroy(options) {
  const vendor = await Vendor.destroy(options);

  return vendor;
}

export { create, findAll, destroy };

export default {
  create,
  findAll,
  destroy,
};
