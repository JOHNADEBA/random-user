import React from "react";
import { useGlobalContext } from "../services/context";
import {
	FaEnvelopeOpen,
	FaInternetExplorer,
	FaMap,
	FaPhone,
	FaRegBuilding,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Person = () => {
	const { topText, downText, user, loading, handleHover, randomUser } = useGlobalContext();
    
	const allIcons = [
		{
			name: "name",
			icon: <IoPersonSharp />,
		},
		{ name: "email", icon: <FaEnvelopeOpen /> },
		{ name: "website", icon: <FaInternetExplorer /> },
		{ name: "address", icon: <FaMap /> },
		{ name: "phone", icon: <FaPhone /> },
		{ name: "company", icon: <FaRegBuilding /> },
	];

	return (
		<div className="App-header">
			<div className="pics-cont">
				<img
					src={`https://picsum.photos/200/300?random=${user.id}`}
					alt={user.name}
				></img>
			</div>
			<p className="header">My {topText} is</p>
			<p className="downtext">{downText}</p>
			<div className="icon-cont">
				{allIcons.map((icon, i) => {
					return (
						<p
							onMouseEnter={() => handleHover(icon.name)}
							className="icon"
							key={i}
						>
							{icon.icon}
						</p>
					);
				})}
			</div>

            <button onClick={randomUser} className="random">{loading ? 'LOADING...':'RANDOM USER'}</button>
		</div>
	);
};

export default Person;
