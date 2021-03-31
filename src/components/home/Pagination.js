import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../actions/pokemon";

export const Pagination = () => {
  const dispatch = useDispatch();
  const next_url = useSelector((state) => state.pokemon.next);
  const previous_url = useSelector((state) => state.pokemon.previous);
const handlePagination =(e) => {
    let current_url = "next" === e.target.id ? next_url : previous_url
     dispatch(getPokemons(current_url)) 

}

  return (
    <div className="navbar__pagination">
      <div className="">
        {previous_url && (
          <button type="submit" className="btn btn-back" name="previous" onClick={(e)=> handlePagination(e)}>
            <i  id="previous" class="fas fa-backward"></i>
          </button>
        )}
      </div>
      <div className="">
        {next_url && (
          <button  name="next" type="submit" className="btn btn-back" onClick={(e)=> handlePagination(e)}>
            <i id="next" class="fas fa-forward"></i>
          </button>
        )}
      </div>
    </div>
  );
};
