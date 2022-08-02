import React, { createContext, useReducer } from "react";
import { teamReducer } from "../reducers/teamReducer";

export const initialState = {
  dispatch: () => null,
  teams: [],
  selectedTeam: null,
  selectedTeamId: '',
  selectedTeamSeason: new Date().getFullYear() - 1,
  selectedPlayer: null
};

export const TeamContext = createContext(initialState);

export const TeamContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);

  return (
    <TeamContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TeamContext.Provider>
  );
};