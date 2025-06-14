import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { topProductsData } from "../../constant/chartData.const";

export const getTopProductsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Top products data retrieved successfully",
      topProductsData
    );
  }
);
