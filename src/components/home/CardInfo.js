import React from "react";
import {ChipInfo} from "./ChipInfo"


export const CardInfo = ({ pokemonDetail}) => {
   const id_pokemon = pokemonDetail.data.detail.id;
  const types = pokemonDetail.data.detail.types;
  const height = pokemonDetail.data.detail.height;
  const weight = pokemonDetail.data.detail.weight; 
  return (

    <div className="card__info card__shadow">
    <div className="card__text-detail">
        <p className="card__pokemon-name-detail">{pokemonDetail.name}</p>
        <ChipInfo types={types} />
        <div className="card__info-title mt-10">Pokedex Number</div>
        <p className="card__pokemon-id-detail">{id_pokemon}</p>
        <hr className="line mt-10"></hr>
       <div className="card__info-title mt-10">Height</div>
        <p className="card__pokemon-id-detail">{height}</p>

        <hr className="mt-10"></hr>
        <div className="card__info-title mt-10">Weight</div>
        <p className="card__pokemon-id-detail">{weight}</p>
        <hr className="mt-10"></hr>
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
