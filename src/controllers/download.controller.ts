import { Request, Response } from "express";
import responseHandler from "../handler/response.handler";
import {
  RequestBody,
  RequestParams,
  RequestQuery,
  ResponseBody,
} from "../types/reqDownload";
import downloadMovieController from "./downloadMovie.controller";
import checkLinkHandler from "../handler/checkLink.handler";
import downloadSeriseController from "./downloadSerise.controller";

const movieDetail = (
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response
) => {
  try {
    const pageUrl = req.query.url;
    if (checkLinkHandler.check(pageUrl) === "movies") {
      downloadMovieController.dwLink(pageUrl, res);
    } else if (checkLinkHandler.check(pageUrl) === "tv") {
      downloadSeriseController.dwLink(pageUrl, res);
    }
  } catch {
    responseHandler.notfound(res);
  }
};
export default { movieDetail };
