import React from "react";
import { Chip } from "./Chip";


export const CardInfo = ({ pokemonDetail}) => {
   const id_pokemon = pokemonDetail.data.detail.id;
  const types = pokemonDetail.data.detail.types;
  const height = pokemonDetail.data.detail.height;
  const weight = pokemonDetail.data.detail.weight; 
  return (

    <div className="card__info card__shadow">
    <div className="card__text-detail">
        <p className="card__pokemon-name-detail">{pokemonDetail.name}</p>
        <Chip types={types} />
        <h2>Pokedex Number</h2>
        <p className="card__pokemon-id mt-5">00{id_pokemon}</p>
        <hr className="line"></hr>
        <h2>Height</h2>
        <p className="card__pokemon-name">{height}</p>

        <hr></hr>
        <h2>Weight</h2>
        <p className="card__pokemon-name">{weight}</p>
        <hr></hr>
        <h2>Shyny</h2>
        <div className="card_pokemon-foot">
        <img
          className="card__pokemon-img_detail"
          src={pokemonDetail.data.detail.sprites.front_shiny}
          alt="pokemonmin1"
        />
        <img
          className="card__pokemon-img_detail"
          src={pokemonDetail.data.detail.sprites.back_shiny}
          alt="pokemonmin2"
        />
      </div>
      </div> 


    </div>
    
  );
};
