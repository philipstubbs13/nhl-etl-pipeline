import axios from "axios";

export const getTeams = async ()=> {
    const response = await axios.get(`api/teams`);
  
    return response.data;
};

export const getTeam = async (teamId, season)=> {
    const response = await axios.get(`api/teams/${teamId}?season=${season}`);

    return response.data;
};

export const getPlayer = async (playerId, season)=> {
    const response = await axios.get(`/api/players/${playerId}?season=${season}`);

    return response.data;
};

export const downloadPlayerCsv = async (playerId, season)=> {
    const response = await axios.get(`/api/players/${playerId}/download?season=${season}`);
  
    return response.data;
};

export const downloadTeamCsv = async (teamId, selectedTeamSeason)=> {
    const response = await axios.get(`api/teams/${teamId}/download?season=${selectedTeamSeason}`);
  
    return response.data;
};