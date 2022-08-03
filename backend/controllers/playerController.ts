import asyncHandler from 'express-async-handler';
import axios from 'axios';
import { buildPlayerData } from '../utils/buildPlayerData';
import { Request } from 'express';

const apiBaseUrl: string = 'https://statsapi.web.nhl.com/api/v1/people';

export const getPlayer = asyncHandler(async (req: Request, res): Promise<void> => {
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${req.query.season}`);

    //@ts-ignore
    res.status(200).json(buildPlayerData(playerResponse, playerStatsResponse, req.query.season));
});

export const downloadPlayerCsv = asyncHandler(async (req, res): Promise<void> => {
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${req.query.season}`);
    const headers: string[] = ['ID', 'Season', 'Team', 'First Name', 'Last Name', 'Age', 'Number', 'Position', 'Is Rookie?', 'Assists', 'Goals', 'Games', 'Hits', 'Points']
    //@ts-ignore
    const playerData = [buildPlayerData(playerResponse, playerStatsResponse, req.query.season)]
    
    res.status(200).json({ playerData, headers })
});