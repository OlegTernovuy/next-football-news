import axios from 'axios';
import {
    IFootballPlayerInfo,
    IFootballTeam,
    IFootballTeams,
    IFootballTeamSquad,
    ITvStations,
} from '../types/football';

const API_KEY = '3NPiZ8l8Ljcz7wz7SlwKKblSe7Bc425vmQFHdYGGMU503zTbqmPV5P6Smx2q';
const PUBLIC_BASE_URL = 'https://api.sportmonks.com/v3';

axios.defaults.baseURL = PUBLIC_BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getTeams = async (
    page?: number
): Promise<IFootballTeams | undefined> => {
    try {
        const res = await axios.get(`/football/teams?page=${page}`);
        if (res.status !== 200) {
            throw new Error('Something went wrong');
        }

        return res.data as IFootballTeams;
    } catch (error) {
        console.log((error as Error).message);
    }
};

export const getAboutTeam = async (
    teamId: string
): Promise<IFootballTeam | undefined> => {
    try {
        const res = await axios.get(`/football/teams/${teamId}`);
        if (res.status !== 200) {
            throw new Error('Something went wrong');
        }

        return res.data as IFootballTeam;
    } catch (error) {
        console.log((error as Error).message);
    }
};

export const getTeamSquad = async (
    teamId: string
): Promise<IFootballTeamSquad | undefined> => {
    try {
        const res = await axios.get(`/football/squads/teams/${teamId}`);
        if (res.status !== 200) {
            throw new Error('Something went wrong');
        }

        return res.data as IFootballTeamSquad;
    } catch (error) {
        console.log((error as Error).message);
    }
};

export const getInfoAboutPlayer = async (
    playerId: number
): Promise<IFootballPlayerInfo | undefined> => {
    try {
        const res = await axios.get(`/football/players/${playerId}`);
        if (res.status !== 200) {
            throw new Error('Something went wrong');
        }

        return res.data as IFootballPlayerInfo;
    } catch (error) {
        console.log((error as Error).message);
    }
};

export const getTvStations = async (): Promise<ITvStations | undefined> => {
    try {
        const res = await axios.get(`/football/tv-stations`);
        if (res.status !== 200) {
            throw new Error('Something went wrong');
        }

        return res.data as ITvStations;
    } catch (error) {
        console.log((error as Error).message);
    }
};
