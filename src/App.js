import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MovieCard from "./components/MovieCard";
import MovieCardExpanded from "./components/MovieCardExpanded";
import MovieCardSmall from "./components/MovieCardSmall";
import TopAppBar from "./components/TopAppBar";
import Grow from "@mui/material/Grow";

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

function GetExpandedCard(props) {}

function App() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [expendedMovie, setExpendedMovie] = React.useState("");

  const handleClickGrow = (movieName) => {
    setIsExpanded((prev) => !prev);
    setExpendedMovie(movieName);
    console.log("in App function!!!");
    console.log("Name: ", expendedMovie);
  };

  const elementRef = useRef();

  const movieCards = movies.map((movie) => (
    <MovieCardSmall
      onClick={handleClickGrow}
      ref={elementRef}
      innerRef={movie.id}
      id={movie.id}
      key={movie.id}
      name={movie.name}
      reccomenders={movie.reccomenders}
    />
  ));

  return (
    <Container sx={{ bgcolor: "lightPink", height: "200vh" }}>
      <div className="movieapp stack-large" style={{ position: "relative" }}>
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
          <Grow
            in={isExpanded}
            appear={true}
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={500}
            style={{
              position: "absolute",
              transformOrigin: "center",
              margin: "0 auto",
              top: "40%",
              left: "25%",
              //transform: "translate(-50%, -50%)",
            }}
          >
            <MovieCardExpanded
              ref={elementRef}
              innerRef={123}
              id={123}
              key={123}
              name={expendedMovie}
              reccomenders={"reccomenders"}
            />
          </Grow>
        </div>
      </div>
    </Container>
  );
}

export default App;
