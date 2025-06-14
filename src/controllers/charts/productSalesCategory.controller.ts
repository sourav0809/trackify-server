import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { productSalesCategoryData } from "../../constant/chartData.const";

export const getProductSalesCategoryData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Product sales category data retrieved successfully",
      productSalesCategoryData
    );
  }
);
