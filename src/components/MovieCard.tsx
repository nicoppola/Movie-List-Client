import React, { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import movieImage from "../images/movie-img.jpeg";
import netflixIcon from "../images/netflix-icon.png";
import huluIcon from "../images/hulu-icon.png";

export interface MovieCardProps {
  name: string;
  key: string;
  reccomenders: string;
  onClick: (name: string) => void;
}

export default function MovieCard(props: MovieCardProps) {
  const { name, reccomenders, onClick } = props;
  return (
    <Card
      onClick={() => props.onClick(name)}
      sx={{ width: 280 }}
      style={{
        margin: "20px 20px 20px 10px",
      }}
    >
      <CardMedia
        style={{ height: "200px", paddingTop: "2%" }}
        component="img"
        alt="movie image"
        height="140"
        image={movieImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Reccomended by:</b> {reccomenders}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          <img src={netflixIcon} width="40" alt="netflix" />
        </Button>
        <Button>
          <img src={huluIcon} width="31" alt="hulu" />
        </Button>
      </CardActions>
    </Card>
  );
}
