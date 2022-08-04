export interface IRoster {
    jerseyNumber: number;
    person: IPerson;
    position: IPosition;
}

export interface IPerson {
    fullName: string;
}

export interface IPosition {
    name: string;
}

export interface IGetTeamsResponseData {
    id: number;
    name: string;
}

export interface IGetPlayerResponseData {
    age: number;
    assists: number;
    firstName: string;
    games: number;
    goals: number;
    hits: number;
    id: number;
    is_rookie: string;
    lastName: string;
    number: string;
    points: number;
    position: string;
    season: string;
    team: string;
}

export interface IDownloadPlayerCsvResponseData {
    headers: string[];
    playerData: IGetPlayerResponseData[]
}

export interface IGetTeamResponseData {
    games_played: number;
    goals_per_game: number;
    id: number;
    losses: number;
    name: string;
    points: number;
    roster: IRoster[];
    venue: string;
    wins: number;
}

export interface IDownloadTeamCsvResponseData {
    headers: string;
    teamData: IGetTeamResponseData[]
}

export interface ISelectedPlayer {
    id: number;
    firstName: string;
    lastName: string;
}