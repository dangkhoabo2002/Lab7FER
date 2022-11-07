import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { List } from "../data/ListOfFilm";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {List.map((film) => (
        <Card
          sx={{
            width: "500px",
            height: "500px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            borderRadius: "16px",
          }}
        >
          <CardMedia
            component="img"
            alt={film.title}
            height="300px"
            image={film.img}
          />
          <CardContent>
            <br></br>
            <Typography gutterBottom variant="h5" component="div">
              {film.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <Rating name="read-only" value={film.rate} readOnly />
            <Link to={`/detail/${film.id}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
