import {types} from "../constants/types"

export const getPokemons = (url = "https://pokeapi.co/api/v2/pokemon/" ) => ({
  type: types.get_array,
  payload: {url: url},
});

export const filter = (searchWord) => ({
  type: types.filter,
  payload: {searchWord: searchWord},
});

export const getDetail = (id) => ({
  type: types.detail,
  payload: {id: id},
});

export const setListPokemons = (array, next, previous) => ({
  type: types.set_array,
  payload: { array: array, next: next, previous: previous },
});
 

export const back = () => ({
  type: types.back,
});

export const showAlert= (type, message) => {
  /* TODO: Finalizar la parte de Alertas en reducer y aqui en esta accion para todos. */
console.log(type, message);
}
 