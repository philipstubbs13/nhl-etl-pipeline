import { NhlActions } from "../reducers/nhlReducer.types";

export interface INhlContext {
  dispatch: React.Dispatch<NhlActions>;
  selectedSeason: number;
  selectedPlayer: any;
  selectedTeam: any;
  selectedTeamId: number;
  teams: any[];
}