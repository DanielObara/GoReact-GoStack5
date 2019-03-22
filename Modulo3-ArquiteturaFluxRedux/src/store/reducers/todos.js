const initialState = [
	{ id: 1, text: "Make a coffe!" },
	{ id: 2, text: "Make a some sport!" }
];

export default function todos(state = initialState, action) {
	switch (action.type) {
		// case typeName:
		// 	return { ...state, ...payload };

		default:
			return state;
	}
}
