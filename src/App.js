import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MovieCard from "./components/MovieCard";
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

const movieCards = movies.map((movie) => (
  <MovieCard
    id={movie.id}
    key={movie.id}
    name={movie.name}
    reccomenders={movie.reccomenders}
  />
));

function App() {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <Container sx={{ bgcolor: "lightPink", height: "200vh" }}>
      <div className="movieapp stack-large">
        <TopAppBar />
        <h1 align="center">Nicole's Movie List</h1>
        <TextField
          fullWidth
          type="search"
          placeholder="Reccomend a Movie"
          id="movie-search-text-field"
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>{movieCards}</div>
      </div>
    </Container>
  );
}

export default App;
