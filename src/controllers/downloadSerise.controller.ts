import { Response } from "express";
import axiosClient from "../axios/axios.client";
import cheerio from "cheerio";
import responseHandler from "../handler/response.handler";
import { DSerise, ISeasons } from "../types/downloadSerise";

const dwLink = async (pageUrl: string, res: Response) => {
  try {
    axiosClient.get(pageUrl).then((response) => {
      const $ = cheerio.load(response);
      const dSerise: DSerise[] = [];
      const seasons: ISeasons[] = [];
      const name: string = pageUrl
        .split("/")
        .reverse()
        .filter((n) => n)[0];
      const box = $("#new-link > ul > li");
      box.each((i, elem) => {
        const season: string = $(elem)
          .find(".new-link-1")
          .text()
          .replace(/\n/g, "");
        const status: string = $(elem)
          .find(".new-link-2")
          .text()
          .replace(/\n/g, "");
        const url: string | undefined = $(elem)
          .find(".new-link-3 > a")
          .attr("href");
        seasons.push({
          season,
          status,
          url,
        });
      });
      dSerise.push({
        name,
        seasons,
      });
      responseHandler.ok(res, dSerise);
    });
  } catch {
    responseHandler.notfound(res);
  }
};

export default { dwLink };
