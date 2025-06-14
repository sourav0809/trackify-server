import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { userRegionChartData } from "../../constant/chartData.const";

export const getUserRegionChartData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "User region chart data retrieved successfully",
      userRegionChartData
    );
  }
);
