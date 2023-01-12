const check = (url: string): string => {
  if (url.includes("movies")) {
    return "movies";
  } else if (url.includes("tv-series")) {
    return "tv";
  }
  throw new Error();
};

export default { check };
