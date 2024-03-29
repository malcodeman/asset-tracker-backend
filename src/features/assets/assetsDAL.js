import Asset from "./assetsModel";

async function create(values) {
  const asset = await Asset.create(values);

  return asset;
}

async function findAll(where) {
  const assets = await Asset.findAll(where);

  return assets;
}

async function findOne(where) {
  const asset = await Asset.findOne(where);

  return asset;
}

async function destroy(options) {
  const asset = await Asset.destroy(options);

  return asset;
}

async function update(values, options) {
  const asset = await Asset.update(values, options);

  return asset;
}

export { create, findAll, findOne, destroy, update };

export default {
  create,
  findAll,
  findOne,
  destroy,
  update,
};
