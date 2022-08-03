import { ITeamData } from "../shared.types";

export const buildTeamData = (teamResponse: any, isCsvDownload: boolean): ITeamData => {
    const team = teamResponse.data.teams[0];
    const teamStats = team.teamStats[0].splits[0].stat;

    const teamData = {
        id: team.id,
        name: team.name,
        venue: team.venue.name,
        games_played: teamStats.gamesPlayed,
        wins: teamStats.wins,
        losses: teamStats.losses,
        points: teamStats.pts,
        goals_per_game: teamStats.goalsPerGame
    }

    const teamDataNotIncludedInCsv = {
        ...teamData,
        roster: team.roster.roster
    }

    if (isCsvDownload) {
        return teamData
    }

    return teamDataNotIncludedInCsv;
}