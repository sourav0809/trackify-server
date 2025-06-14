import express from "express";
import { getRevenueChartData } from "../controllers/charts/revenue.controller";
import { getMetricsData } from "../controllers/charts/metrics.controller";
import { getUserRegionChartData } from "../controllers/charts/userRegion.controller";
import { getProductSalesCategoryData } from "../controllers/charts/productSalesCategory.controller";
import {
  getProductPerformanceData,
  getProductPerformanceStatistics,
} from "../controllers/charts/productPerformance.controller";
import { getOrderFulfillmentData } from "../controllers/charts/orderFulfillment.controller";
import { getConversionHistoryData } from "../controllers/charts/conversionHistory.controller";
import { getOrderDistributionData } from "../controllers/charts/orderDistribution.controller";
import { getSalesTrendsData } from "../controllers/charts/salesTrends.controller";
import { getInventoryLevelsData } from "../controllers/charts/inventoryLevels.controller";
import { getVisitorInsightsData } from "../controllers/charts/visitorInsights.controller";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

// Revenue chart routes
router.get("/revenue", authenticate, getRevenueChartData);

// Metrics routes
router.get("/metrics", authenticate, getMetricsData);

// User region chart routes
router.get("/user-region", authenticate, getUserRegionChartData);

// Product sales category routes
router.get(
  "/product-sales-category",
  authenticate,
  getProductSalesCategoryData
);

// Product performance routes
router.get("/product-performance", authenticate, getProductPerformanceData);

router.get(
  "/product-performance/statistics",
  authenticate,
  getProductPerformanceStatistics
);

// Order fulfillment routes
router.get("/order-fulfillment", authenticate, getOrderFulfillmentData);

// Conversion history routes
router.get("/conversion-history", authenticate, getConversionHistoryData);

// Order distribution routes
router.get("/order-distribution", authenticate, getOrderDistributionData);

// Sales trends routes
router.get("/sales-trends", authenticate, getSalesTrendsData);

// Inventory levels routes
router.get("/inventory-levels", authenticate, getInventoryLevelsData);

// Visitor insights routes
router.get("/visitor-insights", authenticate, getVisitorInsightsData);

export default router;
