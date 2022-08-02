const asyncHandler = require('express-async-handler');
const { Parser } = require('json2csv');
const axios = require('axios');
const { ExportToCsv } = require('export-to-csv');


const getPlayers = asyncHandler(async (req, res) => {
    res.status(200).json({ players: [] })
})

const downloadPlayerCsv = asyncHandler(async (req, res) => {
    const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${req.params.id}`);
    const player = response.data.people[0];
    const headers = ['ID', 'Name', 'Team', 'Age', 'Number', 'Position', 'Is Rookie?']
    const playerData = [
        {
            id: player.id,
            name: player.fullName,
            team: player.currentTeam.name,
            age: player.currentAge,
            number: player.primaryNumber,
            position: player.primaryPosition.name,
            is_rookie: player.rookie ? 'yes' : 'no',
         
        }
    ]
    
    res.status(200).json({ playerData, headers })
})

module.exports = {
    getPlayers,
    downloadPlayerCsv
}