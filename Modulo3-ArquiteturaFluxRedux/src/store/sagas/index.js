//All seria como se fosse o combineReducers
//TakeLatest pega só a ultima requisição feita pelo usuário caso o mesmo fizesse 5x requisições
import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoriteTypes } from "../ducks/favorites";

import { addFavorite } from "./favorites";

/*
	Significa criar uma função generator que seria uma forma
de lidar com assincronismo como o async/await
*/

//yield seria como se fosse o await para aguardar antes de continuar o resto do código
export default function* rootSaga() {
	yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
