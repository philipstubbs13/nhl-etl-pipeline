import axios from "axios";
import { IDownloadPlayerCsvResponseData, IDownloadTeamCsvResponseData, IGetPlayerResponseData, IGetTeamResponseData, IGetTeamsResponseData } from "./shared.types";

const baseTeamsUrl = '/api/teams';
const basePlayersUrl = '/api/players';

export const getTeams = async (): Promise<IGetTeamsResponseData[]> => {
    const response = await axios.get(`${baseTeamsUrl}`);
  
    return response.data;
};

export const getTeam = async (teamId: number, season: number): Promise<IGetTeamResponseData> => {
    const response = await axios.get(`${baseTeamsUrl}/${teamId}?season=${season}`);

    console.log(response.data)

    return response.data;
};

export const getPlayer = async (playerId: number, season: number): Promise<IGetPlayerResponseData> => {
    const response = await axios.get(`${basePlayersUrl}/${playerId}?season=${season}`);

    return response.data;
};

export const downloadPlayerCsv = async (playerId: number, season: number): Promise<IDownloadPlayerCsvResponseData> => {
    const response = await axios.get(`${basePlayersUrl}/${playerId}/download?season=${season}`);
  
    return response.data;
};

export const downloadTeamCsv = async (teamId: number, season: number): Promise<IDownloadTeamCsvResponseData> => {
    const response = await axios.get(`${baseTeamsUrl}/${teamId}/download?season=${season}`);
  
    return response.data;
};