import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    DB_NAME: Joi.string().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432),
    JWT_SECRET: Joi.string().required(),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30),
    RATE_LIMIT_WINDOW_MS: Joi.number().default(20 * 60 * 1000),
    RATE_LIMIT_MAX: Joi.number().default(500),
  })
  .unknown();

const { value, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

interface EnvConfig {
  nodeEnv: string;
  port: number;
  origin: string;
  db: {
    name: string;
    user: string;
    password: string;
    host: string;
    port: number;
  };
  jwt: {
    secret: string;
    accessExpirationMinutes: number;
    refreshExpirationDays: number;
  };
  rateLimit: {
    windowMs: number;
    max: number;
  };
}

export const envConfig: EnvConfig = {
  nodeEnv: value.NODE_ENV,
  port: value.PORT,
  origin: "*",
  db: {
    name: value.DB_NAME,
    user: value.DB_USER,
    password: value.DB_PASSWORD,
    host: value.DB_HOST,
    port: value.DB_PORT,
  },
  jwt: {
    secret: value.JWT_SECRET,
    accessExpirationMinutes: value.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: value.JWT_REFRESH_EXPIRATION_DAYS,
  },
  rateLimit: {
    windowMs: value.RATE_LIMIT_WINDOW_MS,
    max: value.RATE_LIMIT_MAX,
  },
};
