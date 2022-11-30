export const reducer = (state, action) => {
	if (action.type === "FETCH") {
		return {
			...state,
			loading: action.loading,
			users: action.users,
			user: action.user,
			downText: action.downText,
		};
	}
	if (action.type === "UPDATE") {
		if (action.payload === "name") {
			let data = state.user.name;
			return { ...state, topText: "name", downText: data };
		} else if (action.payload === "email") {
			let data = state.user.email;
			return { ...state, topText: "email", downText: data };
		} else if (action.payload === "website") {
			let data = state.user.website;
			return { ...state, topText: "website", downText: data };
		} else if (action.payload === "address") {
			let suite = state.user.address.suite;
			let street = state.user.address.street;
			let city = state.user.address.city;

			const address = `${suite}, ${street}, ${city}`;
			return {
				...state,
				topText: "address",
				downText: address,
			};
		} else if (action.payload === "phone") {
			let data = state.user.phone;
			return { ...state, topText: "phone", downText: data };
		} else if (action.payload === "company") {
			let data = state.user.company.name;
			return { ...state, topText: "company", downText: data };
		}
	}
	if (action.type === "RANDOM_USER") {
		state.loading = true;
		let newIndex = Math.floor(Math.random() * state.users.length);

		let newObj = state.users[newIndex];
		let name = newObj.name;
        state.loading = false;
		return { ...state, user: newObj, downText: name, loading: false };
	}
	return state;
};
