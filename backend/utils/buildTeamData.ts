import { ITeamData } from "../shared.types";

export const buildTeamData = (teamResponse): ITeamData => {
    const team = teamResponse.data.teams[0];
    const teamStats = team.teamStats[0].splits[0].stat;

    return ({
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
}