import { types } from "../constants/types";
const initialState = [
  {
    arrayPokemons: [],
    detail: null,
    open: false,
    next: null,
    previous: null,
  },
];

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.set_array: {
      
      return {
        ...state,
        arrayPokemons: [...action.payload.array],
        next:action.payload.next,
        previous:action.payload.previous,

      };
    }
    case types.filter: {
      let word_to_find = action.payload.searchWord;

      const newArray = state.arrayPokemons.filter((pokemon) =>
        Object.keys(pokemon).some((k) =>
          pokemon.name.toLowerCase().includes(word_to_find.toLowerCase())
        )
      );

      return {
        ...state,
        arrayPokemons: newArray,
      };
    }
    case types.detail: {
      let id_to_find = action.payload.id;
      let detail = state.arrayPokemons[id_to_find];
      return {
        ...state,
        open: true,
        detail: detail,
      };
    }
    case types.back: {
      return {
        ...state,
        open: false,
        detail: null,
      };
    }
    default:
      return state;
  }
};
