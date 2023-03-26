import React, { createContext, useContext, useReducer } from "react";

// prepare data layers
export const StateContext = createContext();

// wrap app and provide the data layar
export const StateProvide = ({ reducer, initialState, children }) => (
  <StateContext.provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);
