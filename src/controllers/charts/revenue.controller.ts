import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { revenueChartData } from "../../constant/chartData.const";

export const getRevenueChartData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Revenue chart data retrieved successfully",
      revenueChartData
    );
  }
);
