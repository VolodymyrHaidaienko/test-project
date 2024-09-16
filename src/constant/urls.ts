const baseURL = "https://api.themoviedb.org/3";
export const API_KEY = "3685d3eb8695f087227e0ee980f3ae4d";

type urlsOptions = {
  movie: string;
};

export const urls = <urlsOptions>{
  movie: "discover/movie",
};

export default baseURL;
