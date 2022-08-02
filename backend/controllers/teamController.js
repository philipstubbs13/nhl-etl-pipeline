const asyncHandler = require('express-async-handler')
const axios = require('axios');
const { buildTeamData } = require('../utils/buildTeamData');

const apiBaseUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';

const getTeams = asyncHandler(async (req, res) => {
    const response = await axios.get(apiBaseUrl);

    const teams = response.data.teams.map((team) => ({
        id: team.id,
        name: team.name,
    }))

    res.status(200).json({ teams })
})

const getTeam = asyncHandler(async (req, res) => {
    const response = await axios.get(`${apiBaseUrl}${req.params.id}?expand=team.roster&expand=team.stats&expand=team.schedule&season=${req.query.season}`);

    res.status(200).json(buildTeamData(response));
})

const downloadTeamCsv = asyncHandler(async (req, res) => {
    const response = await axios.get(`${apiBaseUrl}${req.params.id}?expand=team.roster&expand=team.stats&season=${req.query.season}`);
    const headers = ['ID', 'Name', 'Venue', 'Games Played', 'Wins', 'Losses', 'Points', 'Goals Per Game']
    const teamData = [buildTeamData(response)];
    
    res.status(200).json({ teamData, headers })
})

module.exports = {
    getTeams,
    getTeam,
    downloadTeamCsv
}