import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [location, setLocation] = useState()

	return (
		<AppContext.Provider value={{
			location, 
			setLocation
        }}>
			{ children }
		</AppContext.Provider>
	)
}
