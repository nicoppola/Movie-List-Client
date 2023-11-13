import React, { useState, forwardRef } from "react";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import movieImage from "../images/movie-img.jpeg";
import netflixIcon from "../images/netflix-icon.png";
import huluIcon from "../images/hulu-icon.png";

const MovieCardExpanded = forwardRef(function (props, ref) {
  return (
    <Card
      onClick={props.onClick}
      ref={ref}
      sx={{ width: 480 }}
      style={{
        margin: "20px 20px 20px 10px",
        ...props.style,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          You Did It!!!!!!! {props.name}
        </Typography>
      </CardContent>
    </Card>
    // <Paper
    //   sx={{ width: 300 }}
    //   elevation={3}
    //   style={{
    //     margin: "20px 20px 20px 10px",
    //   }}
    // />
  );
});

export default MovieCardExpanded;
