import React, { createContext, useReducer } from "react";
import { nhlReducer } from "../reducers/nhlReducer.ts";

export const initialState = {
  dispatch: () => null,
  selectedSeason: 20212022,
  selectedTeam: null,
  selectedTeamId: 30,
  teams: [],
};

export const NhlContext = createContext(initialState);

export const NhlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nhlReducer, initialState);

  return (
    <NhlContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NhlContext.Provider>
  );
};