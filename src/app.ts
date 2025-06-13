import express, { Request, Response } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import compression from "compression";
import { envConfig } from "./config/envConfig";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.route";
import logger from "./config/logger";

const app = express();

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: envConfig.origin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: envConfig.rateLimit.windowMs,
  max: envConfig.rateLimit.max,
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Compression middleware
app.use(compression());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Handle 404 routes
app.use((req: Request, res: Response) => {
  logger.warn(`404 - Route Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    error: "Route not found",
    timestamp: new Date().toISOString(),
  });
});

export default app;
