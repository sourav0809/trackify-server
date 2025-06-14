import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { UserPreferences } from "../models/UserPreferences";
import { envConfig } from "../../config/envConfig";
import logger from "../../config/logger";

const isDevelopment = envConfig.nodeEnv === "development";

const sequelize = new Sequelize({
  database: envConfig.db.name,
  username: envConfig.db.user,
  password: envConfig.db.password,
  host: envConfig.db.host,
  port: envConfig.db.port,
  dialect: "postgres",
  logging: false,
  ssl: !isDevelopment,
  pool: {
    max: isDevelopment ? 5 : 20,
    min: 0,
    acquire: isDevelopment ? 30000 : 60000,
    idle: 10000,
  },
  dialectOptions: !isDevelopment
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        connectTimeout: 30000,
      }
    : undefined,
  models: [User, UserPreferences], // Initialize models directly here
});

// Initialize database
const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Database connection has been established successfully.");

    // Sync models in development
    if (isDevelopment) {
      await sequelize.sync();
      logger.info("Database synchronized successfully.");
    }
  } catch (err) {
    logger.error("Unable to connect to the database:", err);
    logger.error("Please check your database credentials in .env file:");
    logger.error(`Database: ${envConfig.db.name}`);
    logger.error(`User: ${envConfig.db.user}`);
    logger.error(`Host: ${envConfig.db.host}:${envConfig.db.port}`);
    process.exit(1);
  }
};

// Export initialized models and sequelize instance
export { User, UserPreferences, initDatabase };
export default sequelize;
