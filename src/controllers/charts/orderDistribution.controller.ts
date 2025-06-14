import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { orderDistributionData } from "../../constant/chartData.const";

export const getOrderDistributionData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Order distribution data retrieved successfully",
      orderDistributionData
    );
  }
);
