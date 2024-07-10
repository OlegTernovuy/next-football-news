import axios from 'axios';
import { IFootballTeams } from '../types/football';

const API_KEY = '3NPiZ8l8Ljcz7wz7SlwKKblSe7Bc425vmQFHdYGGMU503zTbqmPV5P6Smx2q';
const PUBLIC_BASE_URL = 'https://api.sportmonks.com/v3';

axios.defaults.baseURL = PUBLIC_BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.headers["content-type"] = "application/json";
// axios.defaults.headers["Access-Control-Allow-Credentials"] = "true";
// axios.defaults.headers["Access-Control-Allow-Origin"] = "http://localhost:3000";


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
