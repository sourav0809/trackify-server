import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { visitorInsightsData } from "../../constant/chartData.const";

export const getVisitorInsightsData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Visitor insights data retrieved successfully",
      visitorInsightsData
    );
  }
);
