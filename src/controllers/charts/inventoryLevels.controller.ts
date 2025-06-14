import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { inventoryLevelsData } from "../../constant/chartData.const";

export const getInventoryLevelsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Inventory levels data retrieved successfully",
      inventoryLevelsData
    );
  }
);
