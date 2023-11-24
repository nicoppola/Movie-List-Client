import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MovieCard from "./components/MovieCard";
import MovieDialog from "./components/MovieDialog";
import TopAppBar from "./components/TopAppBar";

const movies = [
  {
    id: "movie-0",
    name: "The Godfather",
    reccomenders: "Julia Carr, Charlie Combs",
  },
  {
    id: "movie-1",
    name: "The Sound of Music",
    reccomenders: "Allie Bergman, Kate Kelly",
  },
];

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expendedMovie, setExpendedMovie] = useState("");

  const handleClickOpen = (movieName: string) => {
    setIsExpanded((prev) => !prev);
    setExpendedMovie(movieName);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const movieCards = movies.map((movie) => (
    <MovieCard
      onClick={handleClickOpen}
      key={movie.id}
      name={movie.name}
      reccomenders={movie.reccomenders}
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
