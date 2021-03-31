import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { Loader } from "./Loader";
import {Pagination}  from "./Pagination"

export const GridComponent = ({ arrayPokemons, filter }) => {
  const state = useSelector((state) => state.pokemon.arrayPokemons);

  

  return (
    <div>
      <Pagination />

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
