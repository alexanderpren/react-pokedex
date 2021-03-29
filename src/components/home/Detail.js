import React from "react";
import { Card } from "./Card";
import { CardInfo } from "./CardInfo";
import { CardImage } from "./CardImage";

export const Detail = ({ detail }) => {
  let pokemonDetail = detail;
  return (
    <div className="detail__container">
      <div className="detail__grid">
        <CardImage className="detail__card" pokemonDetail={pokemonDetail} />
        <CardInfo pokemonDetail={pokemonDetail} />
      </div>
    </div>
  );
};
