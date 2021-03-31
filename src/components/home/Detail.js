import React from "react";
import { CardInfo } from "./CardInfo";
import { CardImage } from "./CardImage";

export const Detail = ({ detail }) => {
  let pokemonDetail = detail;
  return (
    <div className="detail__grid">
      <CardImage pokemonDetail={pokemonDetail} />
      <CardInfo pokemonDetail={pokemonDetail} />
    </div>
  );
};
