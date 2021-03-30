import axios from "axios";
import {getErrorMessage} from "./utils"


const getList = () => {
 
   
    return axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((Response) => {
        return {
          list: Response.data,
          message: null,
        };
      })
      .catch((Error) => {
        return getErrorMessage(Error);
      }); 
};


const getDetailPokemon = (url) => {
 
   
  return axios
    .get(url)
    .then((Response) => {
      return {
        detail: Response.data,
        message: null,
      };
    })
    .catch((Error) => {
      return getErrorMessage(Error);
    }); 
};
export const app = {
    getList,
    getDetailPokemon
   
  };