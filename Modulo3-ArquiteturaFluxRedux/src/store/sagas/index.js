//All seria como se fosse o combineReducers
import { all } from "redux-saga/effects";

/*
	Significa criar uma função generator que seria uma forma
de lidar com assincronismo como o async/await
*/

//yield seria como se fosse o await para aguardar antes de continuar o resto do código
export default function* rootSaga() {
	yield all([]);
}
