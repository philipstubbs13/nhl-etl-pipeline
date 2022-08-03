import { INhlContext } from '../context/NhlContext.types';
//@ts-ignore
import { NhlActions, NhlActionTypes } from './nhlReducer.types.ts';

export const nhlReducer = (
  state: INhlContext,
  action: NhlActions ): INhlContext => {
  switch (action.type) {
    case NhlActionTypes.setTeams:
      return {
        ...state,
        selectedTeam: action.payload.selectedTeam,
        teams: action.payload.teams.map((team) => ({
          value: team.id,
          label: team.name
        })),
      };
      case NhlActionTypes.setPlayer:
        return {
          ...state,
          selectedPlayer: action.payload
        };
    case NhlActionTypes.setTeam:
      return {
        ...state,
        selectedTeamId: action.payload,
      }
      case NhlActionTypes.setSeason:
        return {
          ...state,
          selectedSeason: action.payload
        }
    default:
      return state;
  }
};