export interface IPlayerData {
    id: number;
    season: number;
    team: string;
    firstName: string;
    lastName: string;
    age: number;
    number: string;
    position: string;
    is_rookie: string;
    assists: number;
    goals: number;
    games: number;
    hits: number;
    points: number;
}

export interface ITeamData {
    id: number;
    name: string;
    venue: string;
    roster?: any[];
    games_played: number;
    wins: number;
    losses: number;
    points: number;
    goals_per_game: number;
}

export interface ITeamOption {
    id: number;
    name: string;
}