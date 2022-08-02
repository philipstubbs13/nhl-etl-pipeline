const asyncHandler = require('express-async-handler');
const axios = require('axios');
const { buildPlayerData } = require('../utils/buildPlayerData');

const apiBaseUrl = 'https://statsapi.web.nhl.com/api/v1/people'

const getPlayer = asyncHandler(async (req, res) => {
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${req.query.season}`);

    res.status(200).json(buildPlayerData(playerResponse, playerStatsResponse, req.query.season));
})

const downloadPlayerCsv = asyncHandler(async (req, res) => {
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${req.query.season}`);
    const headers = ['ID', 'Season', 'Team', 'First Name', 'Last Name', 'Age', 'Number', 'Position', 'Is Rookie?', 'Assists', 'Goals', 'Games', 'Hits', 'Points']
    const playerData = [buildPlayerData(playerResponse, playerStatsResponse, req.query.season)]
    
    res.status(200).json({ playerData, headers })
})

module.exports = {
    downloadPlayerCsv,
    getPlayer
}