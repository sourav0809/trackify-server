import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { conversionHistoryData } from "../../constant/chartData.const";

export const getConversionHistoryData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Conversion history data retrieved successfully",
      conversionHistoryData
    );
  }
);
