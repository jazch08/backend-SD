"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const databases = Object.keys(config.databases);

for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  let dbPath = config.databases[database];
  db[database] = new Sequelize(
    dbPath.database,
    dbPath.username,
    dbPath.password,
    dbPath
  );
}

fs.readdirSync(__dirname + "/database1")
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname + "/database1", file))(db.Database1, Sequelize.DataTypes);
    db[model.name+"1"] = model;
  });

  fs.readdirSync(__dirname + "/database2")
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname + "/database2", file))(db.Database2, Sequelize.DataTypes);
    db[model.name+"2"] = model;
  });

  fs.readdirSync(__dirname + "/database3")
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname + "/database3", file))(db.Database3, Sequelize.DataTypes);
    db[model.name+"3"] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
