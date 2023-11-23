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

  const handleClickOpen = (movieName) => {
    setIsExpanded((prev) => !prev);
    setExpendedMovie(movieName);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const elementRef = useRef();

  const movieCards = movies.map((movie) => (
    <MovieCard
      onClick={handleClickOpen}
      ref={elementRef}
      innerRef={movie.id}
      id={movie.id}
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
        <h1 align="center">Nicole's Movie List</h1>
        <TextField
          fullWidth
          type="search"
          placeholder="Reccomend a Movie"
          id="movie-search-text-field"
        />
        <div
          style={{ display: "flex", flexWrap: "wrap", position: "relative" }}
        >
          {movieCards}
          <MovieDialog
            ref={elementRef}
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
