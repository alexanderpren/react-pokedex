import React from "react";

export const CardImage = ({ pokemonDetail }) => {
  console.log(pokemonDetail);
  return (
    <div className="card__image card__shadow">
      <div className="">
        <img
          className=""
          src={
            pokemonDetail.data.detail.sprites.other["official-artwork"]
              .front_default
          }
          alt="pokemon"
        />
      </div>

      <div className="card_pokemon-foot">
        <img
          className="card__pokemon-img"
          src={pokemonDetail.data.detail.sprites.front_default}
          alt="pokemonmin1"
        />
        <img
          className="card__pokemon-img"
          src={pokemonDetail.data.detail.sprites.back_default}
          alt="pokemonmin2"
        />
      </div>
    </div>
  );
};
