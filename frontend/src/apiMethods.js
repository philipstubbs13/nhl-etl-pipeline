import axios from "axios";

const baseTeamsUrl = '/api/teams';
const basePlayersUrl = '/api/players';

export const getTeams = async ()=> {
    const response = await axios.get(`${baseTeamsUrl}`);
  
    return response.data;
};

export const getTeam = async (teamId, season)=> {
    const response = await axios.get(`${baseTeamsUrl}/${teamId}?season=${season}`);

    return response.data;
};

export const getPlayer = async (playerId, season)=> {
    const response = await axios.get(`${basePlayersUrl}/${playerId}?season=${season}`);

    return response.data;
};

export const downloadPlayerCsv = async (playerId, season)=> {
    const response = await axios.get(`${basePlayersUrl}/${playerId}/download?season=${season}`);
  
    return response.data;
};

export const downloadTeamCsv = async (teamId, selectedTeamSeason)=> {
    const response = await axios.get(`${baseTeamsUrl}/${teamId}/download?season=${selectedTeamSeason}`);
  
    return response.data;
};