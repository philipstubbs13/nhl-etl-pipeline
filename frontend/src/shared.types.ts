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