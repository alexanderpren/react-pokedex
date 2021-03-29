import React from "react";
import { Chip } from "./Chip";
import { getDetail } from "../../actions/pokemon";
import { useDispatch } from "react-redux";

export const Card = ({ index, state }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getDetail(parseInt(e.target.id)));
  };

  let current_index = parseInt(index);

   const pokemonName = state[current_index].name;
  const url_img_default =
    state[current_index].data.detail.sprites.other["official-artwork"]
      .front_default;
  const id_pokemon = state[current_index].data.detail.id;
  const types = state[current_index].data.detail.types; 

  return (
    
    <div className="card__content card__shadow">
      <div style={{ cursor: "pointer" }} onClick={(e) => handleClick(e)}>
        <div className="card__text">
          <p className="card__pokemon-name">{pokemonName}</p>
          <p className="card__pokemon-id">00{id_pokemon}</p>
        </div>

        <img
          key={id_pokemon}
          id={current_index}
          className="card__pokemon-img"
          src={url_img_default}
          alt="pokemon"
        />

        <Chip key={current_index} types={types} />
      </div>
    </div> 
  );
};
