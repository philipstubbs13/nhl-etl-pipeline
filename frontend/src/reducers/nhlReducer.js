export const nhlReducer = (
  state,
  action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state,
        selectedTeam: action.payload.selectedTeam,
        teams: action.payload.teams.map((team) => ({
          value: team.id,
          label: team.name
        })),
      };
      case 'SET_PLAYER':
        return {
          ...state,
          selectedPlayer: action.payload
        };
    case 'SET_TEAM':
      return {
        ...state,
        selectedTeamId: action.payload,
      }
      case 'SET_SEASON':
        return {
          ...state,
          selectedSeason: action.payload
        }
    default:
      return state;
  }
};