import { IGetTeamResponseData, IGetTeamsResponseData } from "../shared.types";

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
  }
  
  export type NhlPayload = {
    [NhlActionTypes.setTeam]: number;
    [NhlActionTypes.setTeams]: { teams: IGetTeamsResponseData[], selectedTeam: IGetTeamResponseData };
    [NhlActionTypes.setSeason]: number;
  };
  
  export type NhlActions = ActionMap<NhlPayload>[keyof ActionMap<NhlPayload>];