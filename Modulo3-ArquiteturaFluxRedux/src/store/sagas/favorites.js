//Nossa service contendo a url base que faz a requisição
import api from "../../services/api";

//call que é utilizado para chamar a promisses assim como o await
//put envia a action para os reducers da aplicação
import { call, put, select } from "redux-saga/effects";

//Importa a action de sucesso para usá-la quando a requisição estiver concluída
import { Creators as FavoriteActions } from "../ducks/favorites";

//Este saga receberá a action de request contendo também o payload
export function* addFavorite(action) {
	try {
		const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

		const isDuplicated = yield select(state =>
			state.favorites.data.find(favorite => favorite.id === data.id)
		);

		if (isDuplicated) {
			yield put(FavoriteActions.addFavoriteFailure("Repositório duplicado!"));
		} else {
			const repositoryData = {
				id: data.id,
				name: data.full_name,
				description: data.description,
				url: data.html_url
			};

			yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
		}
	} catch (error) {
		yield put(
			FavoriteActions.addFavoriteFailure("Erro ao adicionar repositório")
		);
	}
}
