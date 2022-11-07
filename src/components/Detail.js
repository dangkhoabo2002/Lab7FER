import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "../data/ListOfFilm";
import { useContext } from "react";
import { Container, Row, Col, Icon } from "react-materialize";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const film = List.find((obj) => {
    return obj.id == userName.id;
  });

  let cost = film.cost.toLocaleString();

  return (
    <Container
      className="container-detail"
    >
      <Col className="product-card">
        <div className="product-img">
          <a onClick={() => setIsOpen(true)}>
            {/* <Icon>ondemand_video</Icon> */}
            <img className="imgDetail" src={`../${film.img}`} alt="" />
          </a>
        </div>

        <div className="product-details">
          <div className="head-card">
            <h2 style={{ color: "black" }}>{film.title}</h2>
            <div
              className="product-price"
              style={{ color: "black", backgroundColor: "rgb(255,0,215,0.2)" }}
            >
              {" "}
              Booking Price: {cost}
            </div>
          </div>
          <div className="product-bottom-details" style={{ color: "black" }}>
            {film.info}
          </div>
        </div>
      </Col>
    </Container>
  );
}
