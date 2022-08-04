import { IPlayerData } from "../shared.types";

export const buildPlayerData = (playerResponse: any, playerStatsResponse: any, season: number): IPlayerData => {
    const player = playerResponse.data.people[0];
    const playerStats = playerStatsResponse.data.stats[0].splits[0].stat;

    return ({
        id: player.id,
        season,
        team: player.currentTeam.name,
        firstName: player.firstName,
        lastName: player.lastName,
        age: player.currentAge,
        number: player.primaryNumber,
        position: player.primaryPosition.name,
        is_rookie: player.rookie ? 'yes' : 'no',
        assists: playerStats.assists || 0,
        goals: playerStats.goals || 0,
        games: playerStats.games || 0,
        hits: playerStats.hits || 0,
        points: playerStats.points || 0,
    })
}