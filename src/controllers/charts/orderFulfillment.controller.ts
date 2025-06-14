import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import { orderFulfillmentData } from "../../constant/chartData.const";

export const getOrderFulfillmentData = catchAsync(
  async (_req: Request, res: Response) => {
    return response(
      res,
      httpStatus.OK,
      "Order fulfillment data retrieved successfully",
      orderFulfillmentData
    );
  }
);
