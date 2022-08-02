const asyncHandler = require('express-async-handler');
const axios = require('axios');

const apiBaseUrl = 'https://statsapi.web.nhl.com/api/v1/people'

const getPlayers = asyncHandler(async (req, res) => {
    res.status(200).json({ players: [] })
})

const getPlayer = asyncHandler(async (req, res) => {
    const firstYear = parseInt(req.query.season);
    const secondYear = firstYear + 1;

    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${firstYear}${secondYear}`);
    const player = playerResponse.data.people[0];
    const playerStats = playerStatsResponse.data.stats[0].splits[0].stat;

    res.status(200).json({
        id: player.id,
        team: player.currentTeam.name,
        firstName: player.firstName,
        lastName: player.lastName,
        age: player.currentAge,
        number: player.primaryNumber,
        position: player.primaryPosition.name,
        is_rookie: player.rookie ? 'yes' : 'no',
        assists: playerStats.assists,
        goals: playerStats.goals,
        games: playerStats.games,
        hits: playerStats.hits,
        points: playerStats.points,
    })
})

const downloadPlayerCsv = asyncHandler(async (req, res) => {
    const firstYear = parseInt(req.query.season);
    const secondYear = firstYear + 1;

    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=${firstYear}${secondYear}`);
    const player = playerResponse.data.people[0];
    const playerStats = playerStatsResponse.data.stats[0].splits[0].stat;
    const headers = ['ID', 'Season', 'Team', 'First Name', 'Last Name', 'Age', 'Number', 'Position', 'Is Rookie?', 'Assists', 'Goals', 'Games', 'Hits', 'Points']
    const playerData = [
        {
            id: player.id,
            season: parseInt(req.query.season),
            team: player.currentTeam.name,
            firstName: player.firstName,
            lastName: player.lastName,
            age: player.currentAge,
            number: player.primaryNumber,
            position: player.primaryPosition.name,
            is_rookie: player.rookie ? 'yes' : 'no',
            assists: playerStats.assists,
            goals: playerStats.goals,
            games: playerStats.games,
            hits: playerStats.hits,
            points: playerStats.points
         
        }
    ]
    
    res.status(200).json({ playerData, headers })
})

module.exports = {
    getPlayers,
    downloadPlayerCsv,
    getPlayer
}