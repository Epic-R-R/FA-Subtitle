import responseHandler from "../handler/response.handler";
import { Request, Response } from "express";
import axiosClient from "../axios/axios.client";
import cheerio from "cheerio";
import { MovieData } from "../types/movieData";

const searchDetail = async (req: Request, res: Response) => {
  try {
    const movieName = req.query.name;
    axiosClient.get(`${process.env.BASE_URL}${movieName}`).then((response) => {
      const $ = cheerio.load(response);
      const result = $(".cat-post");
      const dataMovie: MovieData[] = [];
      result.each((i, elem) => {
        const thumbnail: string | undefined = $(elem)
          .find(".cat-post-tmp > a > img")
          .attr("src");
        const title: string = $(elem)
          .find(".cat-post-titel > h2 > a")
          .text()
          .replace(/\s/g, "");
        const sendData: string = $(elem)
          .find(".sub-row-1")
          .text()
          .split(":")[1]
          .replace(/\s/g, "");
        const reviews: string = $(elem)
          .find(".sub-row-2")
          .text()
          .split(":")[1]
          .replace(/\s/g, "");
        const translators: string = $(elem)
          .find(".sub-row-3")
          .text()
          .split(":")[1]
          .replace(/^\s+|\s+$/g, "");
        const formatSubtitle: string = $(elem)
          .find(".sub-row-4")
          .text()
          .split(":")[1]
          .replace(/\s/g, "");
        const versions: string = $(elem)
          .find(".sub-row-5")
          .text()
          .split(":")[1]
          .replace(/\s/g, "");
        const imdbLink: string | undefined = $(elem)
          .find(".sub-row-6 > a")
          .attr("href");
        const subtitleLink: string | undefined = $(elem)
          .find(".cat-post-tmp > a")
          .attr("href");
        dataMovie.push({
          thumbnail,
          title,
          sendData,
          reviews,
          translators,
          formatSubtitle,
          versions,
          imdbLink,
          subtitleLink,
        });
      });
      responseHandler.ok(res, dataMovie);
    });
  } catch {
    responseHandler.notfound(res);
  }
};

export default { searchDetail };
