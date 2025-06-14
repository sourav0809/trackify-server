import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import {
  productPerformanceData,
  productPerformanceStatistics,
} from "../../constant/chartData.const";

export const getProductPerformanceData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Product performance data retrieved successfully",
      productPerformanceData
    );
  }
);

export const getProductPerformanceStatistics = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Product performance statistics retrieved successfully",
      productPerformanceStatistics
    );
  }
);
