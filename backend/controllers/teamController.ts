import asyncHandler from 'express-async-handler';
import axios from 'axios';
import { buildTeamData } from '../utils/buildTeamData';
import { Request, Response } from 'express';
import { ITeamOption } from '../shared.types';

const apiBaseUrl: string = 'https://statsapi.web.nhl.com/api/v1/teams/';

export const getTeams = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const response = await axios.get(apiBaseUrl);

    const teams: ITeamOption[] = response.data.teams.map((team: any) => ({
        id: team.id,
        name: team.name,
    }))

    res.status(200).json({ teams })
})

export const getTeam = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const response = await axios.get(`${apiBaseUrl}${req.params.id}?expand=team.roster&expand=team.stats&expand=team.schedule&season=${req.query.season}`);

    res.status(200).json(buildTeamData(response, false));
})

export const downloadTeamCsv = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const response = await axios.get(`${apiBaseUrl}${req.params.id}?expand=team.roster&expand=team.stats&season=${req.query.season}`);
    const headers = ['ID', 'Name', 'Venue', 'Games Played', 'Wins', 'Losses', 'Points', 'Goals Per Game']
    const teamData = [buildTeamData(response, true)];
    
    res.status(200).json({ teamData, headers })
});