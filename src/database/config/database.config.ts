import { Dialect, Options } from "sequelize";
import { envConfig } from "../../config/envConfig";
import { SERVER_ENVIRONMENT } from "src/constant/constant";

interface DatabaseConfig extends Options {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: Dialect;
  logging: boolean;
  port: number;
  ssl?: boolean;
  pool?: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
  dialectOptions?: {
    ssl?: {
      require: boolean;
      rejectUnauthorized?: boolean;
    };
    connectTimeout?: number;
  };
}

const isDevelopment = envConfig.nodeEnv === SERVER_ENVIRONMENT.DEVELOPMENT;

const config: DatabaseConfig = {
  database: envConfig.db.name,
  username: envConfig.db.user,
  password: envConfig.db.password,
  host: envConfig.db.host,
  port: envConfig.db.port,
  dialect: "postgres",
  logging: isDevelopment,
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
};

export default config;
