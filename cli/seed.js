import faker from "faker";

import "../src/env";
import User from "../src/features/users/usersModel";
import Workspace from "../src/features/workspaces/workspacesModel";
import Location from "../src/features/locations/locationsModel";
import Vendor from "../src/features/vendors/vendorsModel";
import Employee from "../src/features/employees/employeesModel";
import Asset from "../src/features/assets/assetsModel";

import utils from "../src/utils";
import db from "../src/db";

const LOCATIONS_LENGTH = 10;
const VENDORS_LENGTH = 20;

async function createUsers() {
  const password = await utils.password.hash("hunter2");
  const usersObjects = [
    {
      password,
      email: "rickdeckard@gmail.com",
      firstName: "Rick",
      lastName: "Deckard",
      company: "Tyrell Corporation",
    },
  ];
  const users = await User.bulkCreate(usersObjects, { returning: true });
  const user = users[0];

  return user.id;
}

async function createWorkspaces(userId) {
  const workspacesObjects = [
    {
      userId,
      name: "Office",
      emoji: "🏢",
    },
    {
      userId,
      name: "Home",
      emoji: "🏠",
    },
  ];
  const workspaces = await Workspace.bulkCreate(workspacesObjects, {
    returning: true,
  });

  return workspaces[0].id;
}

async function createLocations(workspaceId) {
  const objects = new Array(LOCATIONS_LENGTH).fill().map(() => {
    return {
      workspaceId,
      name: faker.address.city(),
    };
  });
  const locations = await Location.bulkCreate(objects, {
    returning: true,
  });

  return locations;
}

async function createVendors(workspaceId) {
  const objects = new Array(VENDORS_LENGTH).fill().map(() => {
    return {
      workspaceId,
      name: faker.company.companyName(),
    };
  });
  const vendors = await Vendor.bulkCreate(objects, {
    returning: true,
  });

  return vendors;
}

async function createEmployees(workspaceId) {
  const objects = new Array(100).fill().map(() => {
    return {
      workspaceId,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      hireDate: faker.date.past(2),
      birthDate: faker.date.past(50),
    };
  });
  const employees = await Employee.bulkCreate(objects, {
    returning: true,
  });

  return employees;
}

async function createAssets(workspaceId) {
  const objects = new Array(10).fill().map(() => {
    return {
      workspaceId,
      locationId: faker.random.number({ min: 1, max: LOCATIONS_LENGTH }),
      vendorId: faker.random.number({ min: 1, max: VENDORS_LENGTH }),
      tag: faker.random.uuid(),
      description: faker.lorem.words(),
      price: faker.finance.amount(),
      purchaseDate: faker.date.past(2),
      conditionNotes: faker.lorem.words(),
    };
  });
  const assets = await Asset.bulkCreate(objects, {
    returning: true,
  });

  return assets;
}

async function seed() {
  try {
    await db.sync({ force: true });

    const userId = await createUsers();
    const workspaceId = await createWorkspaces(userId);

    await createLocations(workspaceId);
    await createVendors(workspaceId);
    await createEmployees(workspaceId);
    await createAssets(workspaceId);
    await db.close();

    utils.logger.log("Seed successful.");
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
  }
}

seed();
