export const setTeam = (selectedTeamId) => {
    return { type: 'SET_TEAM', payload: selectedTeamId };
};

export const setSeason = (selectedSeason) => {
    return { type: 'SET_SEASON', payload: selectedSeason };
};

export const setTeams = (teams, selectedTeam) => {
    return { type: 'SET_TEAMS', payload: { teams, selectedTeam } };
};

export const setPlayer = (selectedPlayer) => {
    return { type: 'SET_PLAYER', payload: selectedPlayer };
};


  