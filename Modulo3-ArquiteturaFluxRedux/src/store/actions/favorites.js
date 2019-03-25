//Action criada para chamar a API passando os dados para consulta
export const addFavoriteRequest = repository => ({
	type: "ADD_FAVORITE_REQUEST",
	payload: { repository }
});

//Request => SAGA => CHAMADA A API => SUCCESS

//Action criada para receber os dados da API após o sucesso de resposta
export const addFavoriteSuccess = data => ({
	type: "ADD_FAVORITE_SUCCESS",
	payload: { data }
});

export const removeFavorite = id => ({
	type: "REMOVE_FAVORITE",
	payload: { id }
});
