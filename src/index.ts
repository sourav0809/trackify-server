/* eslint-disable @typescript-eslint/no-var-requires */
import app from "./app";
import { envConfig } from "./config/envConfig";
import logger from "./config/logger";
import { initDatabase } from "./database/config/database";

const startServer = async () => {
  try {
    // Initialize database
    await initDatabase();

    // Start server
    const server = app.listen(envConfig.port, () => {
      logger.info(`Server is running on port ${envConfig.port}`);
    });

    // Handle graceful shutdown
    const gracefulShutdown = async () => {
      logger.info("Received shutdown signal. Starting graceful shutdown...");

      server.close(() => {
        logger.info("Server closed.");
        process.exit(0);
      });
    };

    process.on("SIGTERM", gracefulShutdown);
    process.on("SIGINT", gracefulShutdown);
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
