/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const useGlobalContext = () => {
    const { state, dispatch } = useContext(globalContext);
    return { state, dispatch };
};

// Initial State
const initialState = {
    scrollYPosition: 0,
    list: [],
    offset: 1,
    isAPILoadReq: true,
};

// Create Our context
const globalContext = createContext({
    state: initialState,
    dispatch: () => {},
});

// Provider to wrap around our root react component
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <globalContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </globalContext.Provider>
    );
};
