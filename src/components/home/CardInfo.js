import React from "react";
import { Chip } from "./Chip";


export const CardInfo = ({ item}) => {
  const id_pokemon = item.data.detail.id;
  const types = item.data.detail.types;
  return (
    <div className="card__content card__shadow">
      <div className="card__text">
        <p className="card__pokemon-name">{item.name}</p>
        <Chip types={types} />
        <h2>Pokedex Number</h2>
        <p className="card__pokemon-id">00{id_pokemon}</p>
        <h2>Height</h2>
        <h2>Weight</h2>
        <h2>Shyny</h2>
      </div>


    </div>
  );
};
