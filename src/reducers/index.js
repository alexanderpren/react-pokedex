import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {AuthReducer} from "./AuthReducer";
import {PokemonReducer} from './PokemonReducer'

export const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    pokemon: PokemonReducer
  });