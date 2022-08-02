// @ts-ignore
import { NhlActionTypes } from "./nhlReducer.types.ts";

export const setTeam = (selectedTeamId: number): { type: NhlActionTypes.setTeam; payload: number } => {
    return { type: NhlActionTypes.setTeam, payload: selectedTeamId };
};

export const setSeason = (selectedSeason: number): { type: NhlActionTypes.setSeason; payload: number } => {
    return { type: NhlActionTypes.setSeason, payload: selectedSeason };
};

export const setTeams = (teams, selectedTeam): { type: NhlActionTypes.setTeams; payload: { teams: any[], selectedTeam: any }} => {
    return { type: NhlActionTypes.setTeams, payload: { teams, selectedTeam } };
};

export const setPlayer = (selectedPlayer): { type: NhlActionTypes.setPlayer; payload: { selectedPlayer: any} } => {
    return { type: NhlActionTypes.setPlayer, payload: selectedPlayer };
};


  