/**
 * Action Types
 */

export const Types = {
	ADD_REQUEST: "favorites/ADD_REQUEST",
	ADD_SUCCESS: "favorites/ADD_SUCCESS",
	ADD_FAILURE: "favorites/ADD_FAILURE",
	REMOVE: "favorites/REMOVE"
};

/**
 * Reducer
 */

//Criando o estado inicial da nossa store.
const initialState = {
	loading: false,
	data: [],
	error: null
};

//Responsável por evoluir o estado baseado no Type da ação e parametros.
//Type e payload ficam dentro de action e estão sendo passados desestruturados.
export default (state = initialState, action) => {
	switch (action.type) {
		case Types.ADD_REQUEST:
			return { ...state, loading: true };

		case Types.ADD_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: [...state.data, action.payload.data]
			};

		case Types.ADD_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};

		//Recebendo o estado atual e utilizando o filter pra retornar um novo state com itens com ID diferente do selecionado
		case Types.REMOVE:
			return {
				...state,
				data: state.data.filter(favorite => favorite.id !== action.payload.id)
			};

		//Necessário possuir um retorno default para caso não seja nenhuma das ações acima
		//retorne o estado atual.
		default:
			return state;
	}
};

/**
 * Actions
 */

export const Creators = {
	//Action criada para chamar a API passando os dados para consulta
	addFavoriteRequest: repository => ({
		type: Types.ADD_REQUEST,
		payload: { repository }
	}),

	//Request => SAGA => CHAMADA A API => SUCCESS

	//Action criada para receber os dados da API após o sucesso de resposta
	addFavoriteSuccess: data => ({
		type: Types.ADD_SUCCESS,
		payload: { data }
	}),

	//Action criada para receber os erros da API após a falha da requisição
	addFavoriteFailure: error => ({
		type: Types.ADD_FAILURE,
		payload: { error }
	}),

	//Action criada para chamar o reducer que filtra a storage
	removeFavorite: id => ({
		type: Types.REMOVE,
		payload: { id }
	})
};
