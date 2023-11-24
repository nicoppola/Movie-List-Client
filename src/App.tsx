import React, { useRef, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MovieCard from "./components/MovieCard";
import MovieDialog from "./components/MovieDialog";
import TopAppBar from "./components/TopAppBar";
import MoviesRepository from "./domain/movies-repository";
import Movie from "./models/movie";
import { MovieCardProps } from "./components/MovieCard";

const moviesHardcoded = [
  {
    key: "movie-0",
    name: "The Godfather",
    genre: "Drama",
  },
  {
    key: "movie-1",
    name: "The Sound of Music",
    genre: "Musical",
  },
];

function App() {
  const [movieCards, setMovieCards] = useState(Array<typeof MovieCard>());
  const [isExpanded, setIsExpanded] = useState(false);
  const [expendedMovie, setExpendedMovie] = useState("");

  //todo why is this called 4 times?
  useEffect(() => {
    retrieveMovies();
  }, []);

  const retrieveMovies = () => {
    MoviesRepository.getMoviesHome()
      .then((response: any) => {
        console.log("successfully got movie list");
        console.log(response.data);
        //todo move this part to repository
        const movies = response.data.movies.map((movie: Movie) => (
          <MovieCard
            onClick={handleClickOpen}
            key={movie.guid}
            name={movie.name}
            genre={movie.genre}
          />
        ));
        setMovieCards(movies);
      })
      .catch((e: Error) => {
        //todo show some kind of error pop up?
        console.log(e);
      });
  };

  const handleClickOpen = (movieName: string) => {
    setIsExpanded((prev) => !prev);
    setExpendedMovie(movieName);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const movieCardsHardcoded = moviesHardcoded.map((movie) => (
    <MovieCard
      onClick={handleClickOpen}
      key={movie.key}
      name={movie.name}
      genre={movie.genre}
    />
  ));

  return (
    <Container
      sx={{ bgcolor: "lightPink", height: "200vh", width: "100%" }}
      maxWidth={false}
    >
      <div
        className="movieapp stack-large"
        style={{ margin: "24px", position: "relative" }}
      >
        <TopAppBar />
        <br />
        <br />
        <br />
        <TextField
          fullWidth
          type="search"
          placeholder="Reccomend a Movie"
          id="movie-search-text-field"
        />
        <div
          className="movie-cards"
          style={{ display: "flex", flexWrap: "wrap", position: "relative" }}
        >
          {movieCards}
          <MovieDialog
            name={expendedMovie}
            open={isExpanded}
            onClose={handleClose}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
