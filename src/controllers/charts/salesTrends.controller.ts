import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { salesTrendsData } from "../../constant/chartData.const";

export const getSalesTrendsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Sales trends data retrieved successfully",
      salesTrendsData
    );
  }
);
