import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();
const initialState = {
	topText: "name",
	downText: "",
	index: 0,
	name: "",
	users: [],
	user: [],
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async () => {
		const url = "https://jsonplaceholder.typicode.com/users";
		const response = await fetch(url);
		const data = await response.json();
		dispatch({
			type: "FETCH",
			loading: false,
			users: data,
			user: data[state.index],
			downText: data[state.index].name,
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleHover = (type) => {
		dispatch({ type: "UPDATE", payload: type });
	};
	const randomUser = () => {
		dispatch({ type: "RANDOM_USER" });
	};
	return (
		<AppContext.Provider value={{ ...state, handleHover, randomUser }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
