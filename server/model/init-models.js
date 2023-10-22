import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _about from "./about.js";
import _posting from "./posting.js";
import _users from "./users.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NM,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

function initModels(sequelize) {
  const about = _about.init(sequelize, DataTypes);
  const posting = _posting.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  return {
    about,
    posting,
    users,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize };
