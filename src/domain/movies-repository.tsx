import Movie from "../models/movie";
import api from "../data/api";

const getMoviesHome = () => {
  return api.get<Array<Movie>>("/movies");
};

const MoviesRepository = {
  getMoviesHome,
};

export default MoviesRepository;

//https://www.bezkoder.com/react-typescript-api-call/
