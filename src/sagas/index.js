import {all} from 'redux-saga/effects';

import appSagas from './App'

export default function* rootSaga(getState) {
  yield all([
    
    appSagas()
  ]);
}
