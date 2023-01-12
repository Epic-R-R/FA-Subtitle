import { Response } from "express";
import axiosClient from "../axios/axios.client";
import cheerio from "cheerio";
import responseHandler from "../handler/response.handler";

import { DMovie } from "../types/downloadMovie";

const dwLink = async (pageUrl: string, res: Response) => {
  try {
    axiosClient.get(pageUrl).then((response) => {
      const $ = cheerio.load(response);
      const dMovie: DMovie[] = [];
      const name: string = pageUrl
        .split("/")
        .reverse()
        .filter((n) => n)[0];
      const url: string | undefined = $(".new-link-3 > ").attr("href");
      dMovie.push({
        name,
        url,
      });
      responseHandler.ok(res, dMovie);
    });
  } catch {
    responseHandler.notfound(res);
  }
};
export default { dwLink };
