import Workspace from "./workspacesModel";

async function create(values, options) {
  const workspace = await Workspace.create(values, options);

  return workspace;
}

async function findAll(where) {
  const workspaces = await Workspace.findAll(where);

  return workspaces;
}

async function findOne(where) {
  const workspace = await Workspace.findOne(where);

  return workspace;
}

async function destroy(options) {
  const workspace = await Workspace.destroy(options);

  return workspace;
}

export { create, findAll, findOne, destroy };

export default {
  create,
  findAll,
  findOne,
  destroy,
};
