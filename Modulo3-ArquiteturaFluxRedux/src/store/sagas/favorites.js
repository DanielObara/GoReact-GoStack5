//Nossa service contendo a url base que faz a requisição
import api from "../../services/api";

//call que é utilizado para chamar a promisses assim como o await
//put envia a action para os reducers da aplicação
import { call, put } from "redux-saga/effects";

//Importa a action de sucesso para usá-la quando a requisição estiver concluída
import { addFavoriteSuccess } from "../actions/favorites";

//Este saga receberá a action de request contendo também o payload
export function* addFavorite(action) {
	console.log("TCL: exportfunction*addFavorite -> action", action.payload);
	const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

	const repositoryData = {
		id: data.id,
		name: data.full_name,
		description: data.description,
		url: data.html_url
	};
	console.log(
		"TCL: exportfunction*addFavorite -> repositoryData",
		repositoryData
	);

	yield put(addFavoriteSuccess(repositoryData));
}
