//Criando o estado inicial da nossa store.
const initialState = {
	loading: false,
	data: []
};

//Responsável por evoluir o estado baseado no Type da ação e parametros.
//Type e payload ficam dentro de action e estão sendo passados desestruturados.
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_FAVORITE_REQUEST":
			return { ...state, loading: true };

		case "ADD_FAVORITE_SUCCESS":
			return {
				...state,
				loading: false,
				data: [...state.data, action.payload.data]
			};
		//Recebendo o estado atual e utilizando o filter pra retornar um novo state com itens com ID
		// diferente do selecionado
		case "REMOVE_FAVORITE":
			return {
				data: state.data.filter(favorite => favorite.id !== action.payload.id)
			};

		//Necessário possuir um retorno default para caso não seja nenhuma das ações acima
		//retorne o estado atual.
		default:
			return state;
	}
};
