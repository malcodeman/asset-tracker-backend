import Workspace from "./workspacesModel";

async function create(values) {
  const workspace = await Workspace.create(values);

  return workspace;
}

async function findAll(where) {
  const workspaces = await Workspace.findAll(where);

  return workspaces;
}

async function destroy(options) {
  const workspace = await Workspace.destroy(options);

  return workspace;
}

export { create, findAll, destroy };

export default {
  create,
  findAll,
  destroy,
};
