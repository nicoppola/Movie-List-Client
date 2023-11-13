import React, { useState, useRef, forwardRef } from "react";
import MovieCardSmall from "./MovieCardSmall";
import MovieCardExpanded from "./MovieCardExpanded";
import Grow from "@mui/material/Grow";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

export default function MovieCard(props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClickGrow = () => {
    console.log("in function!!!");
    setIsExpanded((prev) => !prev);
  };

  const elementRef = useRef();

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MovieCardSmall
        onClick={handleClickGrow}
        ref={elementRef}
        innerRef={props.id}
        id={props.id}
        key={props.id}
        name={props.name}
        reccomenders={props.reccomenders}
      />
      <Grow
        in={isExpanded}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={500}
        style={{
          position: "absolute",
          transformOrigin: "center",
        }}
      >
        <MovieCardExpanded
          onClick={handleClickGrow}
          appear={isExpanded}
          ref={elementRef}
          innerRef={props.id}
          id={props.id}
          key={props.id}
          name={props.name}
          reccomenders={props.reccomenders}
        />
      </Grow>
    </Box>
  );
}
