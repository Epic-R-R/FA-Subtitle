import { Response } from "express";
const responseWithData = (res: Response, statusCode: number, data: object) =>
  res.status(statusCode).json(data);

const ok = (res: Response, data: object) => responseWithData(res, 200, data);

const notfound = (res: Response) =>
  responseWithData(res, 404, {
    status: 404,
    message: "Resource not found, Check URL",
  });

export default {
  ok,
  notfound,
};
