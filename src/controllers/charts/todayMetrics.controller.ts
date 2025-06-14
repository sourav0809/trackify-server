import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { todayMetricsData } from "../../constant/chartData.const";

export const getTodayMetricsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Today's metrics data retrieved successfully",
      todayMetricsData
    );
  }
);
