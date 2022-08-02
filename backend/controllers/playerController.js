const asyncHandler = require('express-async-handler');
const axios = require('axios');

const apiBaseUrl = 'https://statsapi.web.nhl.com/api/v1/people'

const getPlayers = asyncHandler(async (req, res) => {
    res.status(200).json({ players: [] })
})

const getPlayer = asyncHandler(async (req, res) => {
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=20182019`);
    const player = playerResponse.data.people[0];

    console.log(player)
    const playerStats = playerStatsResponse.data.stats[0].splits[0].stat;

    console.log(playerStats, 'playerStats')

    res.status(200).json({
        id: player.id,
        team: player.currentTeam.name,
        name: player.fullName,
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
    const playerResponse = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const playerStatsResponse = await axios.get(`${apiBaseUrl}/${req.params.id}/stats?stats=statsSingleSeason&season=20182019`);
    const player = playerResponse.data.people[0];
    const playerStats = playerStatsResponse.data.stats[0].splits[0].stat;

    console.log(player)

    const headers = ['ID', 'Team', 'Age', 'Name', 'Number', 'Position', 'Is Rookie?', 'Assists', 'Goals', 'Games', 'Hits', 'Points']
    const playerData = [
        {
            id: player.id,
            team: player.currentTeam.name,
            age: player.currentAge,
            name: player.fullName,
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