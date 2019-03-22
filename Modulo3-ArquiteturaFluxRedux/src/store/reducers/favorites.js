const initialState = [
	{
		id: 1,
		title: "facebook/react",
		description: "Uma biblioteca JavaScript para criar interfaces de usuário",
		url: "http://github.com/facebook/react"
	}
];

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

		case "REMOVE_FAVORITE":
			return state.filter(favorite => favorite.id !== payload.id);
		default:
			return state;
	}
};
