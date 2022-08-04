import { IGetTeamResponseData, IGetTeamsResponseData, ISelectedPlayer } from "../shared.types";

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };
  
  export enum NhlActionTypes {
    setTeam = 'SET_TEAM',
    setTeams = "SET_TEAMS",
    setSeason = "SET_SEASON",
    setPlayer = "SET_PLAYER"
  }
  
  export type NhlPayload = {
    [NhlActionTypes.setTeam]: number;
    [NhlActionTypes.setTeams]: { teams: IGetTeamsResponseData[], selectedTeam: IGetTeamResponseData };
    [NhlActionTypes.setSeason]: number;
    [NhlActionTypes.setPlayer]: { selectedPlayer: ISelectedPlayer };
  };
  
  export type NhlActions = ActionMap<NhlPayload>[keyof ActionMap<NhlPayload>];