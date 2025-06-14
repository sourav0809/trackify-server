import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { metricsData } from "../../constant/chartData.const";

export const getMetricsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Metrics data retrieved successfully",
      metricsData
    );
  }
);
