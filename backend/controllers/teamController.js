const asyncHandler = require('express-async-handler')
const axios = require('axios');


const getTeams = asyncHandler(async (req, res) => {
    const response = await axios.get('https://statsapi.web.nhl.com/api/v1/teams');

    const teams = response.data.teams.map((team) => ({
        id: team.id,
        name: team.name,
    }))

    res.status(200).json({ teams })
})

const getTeam = asyncHandler(async (req, res) => {
    const firstYear = parseInt(req.query.season);
    const secondYear = firstYear + 1;

    const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${req.params.id}?expand=team.roster&expand=team.stats&expand=team.schedule&season=${firstYear}${secondYear}`);
    const team = response.data.teams[0];
    const teamStats = team.teamStats[0].splits[0].stat;

    console.log(team, 'team')

    res.status(200).json({
        id: team.id,
        name: team.name,
        venue: team.venue.name,
        roster: team.roster.roster,
        games_played: teamStats.gamesPlayed,
        wins: teamStats.wins,
        losses: teamStats.losses,
        points: teamStats.pts,
        goals_per_game: teamStats.goalsPerGame

    })
})

const downloadTeamCsv = asyncHandler(async (req, res) => {
    const firstYear = parseInt(req.query.season);
    const secondYear = firstYear + 1;

    const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${req.params.id}?expand=team.roster&expand=team.stats&season=${firstYear}${secondYear}`);
    const team = response.data.teams[0];
    const teamStats = team.teamStats[0].splits[0].stat;
    const headers = ['ID', 'Name', 'Venue', 'Games Played', 'Wins', 'Losses', 'Points', 'Goals Per Game']

    console.log(teamStats, 'teamStats')
    const teamData = [
        {
            id: team.id,
            name: team.name,
            venue: team.venue.name,
            games_played: teamStats.gamesPlayed,
            wins: teamStats.wins,
            losses: teamStats.losses,
            points: teamStats.pts,
            goals_per_game: teamStats.goalsPerGame
         
        }
    ]
    
    res.status(200).json({ teamData, headers })
})

module.exports = {
    getTeams,
    getTeam,
    downloadTeamCsv
}