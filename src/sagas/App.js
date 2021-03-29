import { all, call, fork, takeEvery, put } from "redux-saga/effects";
import { app } from "./../backend/App";
import { types } from "../constants/types";
import { setListPokemons, showAlert } from "../actions/pokemon";
const arrayPokemons = [];

/// getListPokemons

const getListRequest = async () => {
  return await app
    .getList()
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
    const response = yield call(getListRequest);
    

    if (response.message) {
      yield put(showAlert("ALERT_ERROR", response.message));
    } else {
      try {
        if (response.list.results) {
          yield all(
            response.list.results.map((item) => {
              return call(getDetailPokemon, item);
            })
          );

          yield put(setListPokemons(arrayPokemons));
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
