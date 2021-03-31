import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { Loader } from "./Loader";

export const GridComponent = ({ arrayPokemons, filter }) => {
  const state = useSelector((state) => state.pokemon.arrayPokemons);
  

  return (
    <div>
      <div className="navbar__pagination">
      <div className="">
          <button type="submit" className="btn btn-back" >
          <i class="fas fa-backward"></i>
          </button>
        </div>
        <div className="">
          <button type="submit" className="btn btn-back" >
          <i class="fas fa-forward"></i>
          </button>
        </div>
      </div>

      <div className="grid__container mt-5">
        {state !== undefined ? (
          Object.keys(state).map(
            (key) =>
              state[key].name.includes(filter) && (
                <Card key={key} index={key} state={state} />
              )
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
