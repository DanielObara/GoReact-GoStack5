//Criando o estado inicial da nossa store.
const initialState = [
	{
		id: 1,
		title: "facebook/react",
		description: "Uma biblioteca JavaScript para criar interfaces de usuário",
		url: "http://github.com/facebook/react"
	}
];

//Responsável por evoluir o estado baseado no Type da ação e parametros.
//Type e payload ficam dentro de action e estão sendo passados desestruturados.
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_FAVORITE":
			return [
				...state,
				{
					id: Math.random(),
					title: "facebook/react",
					description:
						"Uma biblioteca JavaScript para criar interfaces de usuário",
					url: "http://github.com/facebook/react"
				}
			];
		//Recebendo o estado atual e utilizando o filter para retornar um novo state com itens com ID
		// diferente do selecionado
		case "REMOVE_FAVORITE":
			return state.filter(favorite => favorite.id !== payload.id);
			
			//Necessário possuir um retorno default para caso não seja nenhuma das ações acima
			//retorne o estado atual.
		default:
			return state;
	}
};
