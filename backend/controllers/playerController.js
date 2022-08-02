const asyncHandler = require('express-async-handler');
const axios = require('axios');

const apiBaseUrl = 'https://statsapi.web.nhl.com/api/v1/people'

const getPlayers = asyncHandler(async (req, res) => {
    res.status(200).json({ players: [] })
})

const getPlayer = asyncHandler(async (req, res) => {
    console.log('getPlayer', req.params.id)
    console.log(`${apiBaseUrl}${req.params.id}?stats=statsSingleSeason&season=20182019`)
    const response = await axios.get(`${apiBaseUrl}/${req.params.id}?stats=statsSingleSeason&season=20182019`);
    const player = response.data.people[0];

    console.log(player, 'player')

    res.status(200).json({
        id: player.id,
        name: player.fullName,
        age: player.currentAge,
        number: player.primaryNumber,
        position: player.primaryPosition.name,
        is_rookie: player.rookie ? 'yes' : 'no',
    })
})

const downloadPlayerCsv = asyncHandler(async (req, res) => {
    const response = await axios.get(`${apiBaseUrl}/${req.params.id}`);
    const player = response.data.people[0];
    const headers = ['ID', 'Name', 'Number', 'Position', 'Is Rookie?']
    const playerData = [
        {
            id: player.id,
            name: player.fullName,
            number: player.primaryNumber,
            position: player.primaryPosition.name,
            is_rookie: player.rookie ? 'yes' : 'no',
         
        }
    ]
    
    res.status(200).json({ playerData, headers })
})

module.exports = {
    getPlayers,
    downloadPlayerCsv,
    getPlayer
}