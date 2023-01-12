interface DSerise {
  name: string;
  seasons: ISeasons[];
}

interface ISeasons {
  season: string;
  status: string;
  url: string | undefined;
}

export { DSerise, ISeasons };
