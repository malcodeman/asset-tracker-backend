import Employee from "./employeesModel";

async function create(values, options) {
  const employee = await Employee.create(values, options);

  return employee;
}

async function findAll(where) {
  const employees = await Employee.findAll(where);

  return employees;
}

async function destroy(options) {
  const employee = await Employee.destroy(options);

  return employee;
}

export { create, findAll, destroy };

export default {
  create,
  findAll,
  destroy,
};
