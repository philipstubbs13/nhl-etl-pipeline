export const teamReducer = (
  state,
  action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return {
        ...state,
        teams: action.payload.teams.map((team) => ({
          value: team.id,
          label: team.name
        })),
      };
      case 'GET_PLAYER':
        return {
          ...state,
          selectedPlayer: action.payload.selectedPlayer
        };
    case 'SET_TEAM':
      return {
        ...state,
        selectedTeamId: action.payload.id,
        selectedTeam: action.payload.selectedTeam
      }
      case 'SET_TEAM_SEASON':
        return {
          ...state,
          selectedTeam: action.payload.selectedTeam,
          selectedTeamSeason: action.payload.selectedTeamSeason
        }
      case 'SET_PLAYER_SEASON':
          return {
            ...state,
            selectedPlayer: action.payload.selectedPlayer,
            selectedTeamSeason: action.payload.selectedTeamSeason
          }
    default:
      return state;
  }
};