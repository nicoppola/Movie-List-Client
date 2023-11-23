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
import { Dialog, DialogTitle } from "@mui/material";

const MovieCardExpanded = forwardRef(function (props, ref) {
  const { name, open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open} ref={ref}>
      <DialogTitle>{name}</DialogTitle>
    </Dialog>
  );
});

export default MovieCardExpanded;
