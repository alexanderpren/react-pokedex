import { all, call, fork, takeEvery, put } from "redux-saga/effects";
import { app } from "./../backend/App";
import { types } from "../constants/types";
import { setListPokemons, showAlert } from "../actions/pokemon";
let arrayPokemons = [];

/// getListPokemons

const getListRequest = async (url) => {
  return await app
    .getList(url)
    .then((list) => list)
    .catch((error) => error);
};

//get data Pokemon
const getDetailPokemon = async (item) => {
  const { name, url } = item;

  return await app
    .getDetailPokemon(url)
    .then((detail) => arrayPokemons.push({ name: name, data: detail }))
    .catch((error) => error);
};

function* getListFromRequest({ payload }) {
  try {
    const {url} = payload
    arrayPokemons = []
    const response = yield call(getListRequest,url);

    if (response.message) {
      yield put(showAlert("ALERT_ERROR", response.message));
    } else {
      try {
        if (response.list.results) {
          const next = response.list.next;
          const previous = response.list.previous;

          yield all(
            response.list.results.map((item) => {
              return call(getDetailPokemon, item);
            })
          );

          yield put(setListPokemons(arrayPokemons, next, previous));
        } else {
          yield put(showAlert("ALERT_ERROR", response.message));
        }
      } catch (error) {
        yield put(showAlert("ALERT_ERROR", error));
      }
    }
  } catch (error) {
    yield put(showAlert("ALERT_ERROR", error));
  }
}

export function* getFromApi() {
  yield takeEvery(types.get_array, getListFromRequest);
}

export default function* rootSaga() {
  yield all([fork(getFromApi)]);
}
