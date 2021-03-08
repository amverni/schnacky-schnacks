import { config } from 'dotenv';

config();

/* Port to run server on */
const DEFAULT_PORT = 3000;
export const PORT:number = parseInt(process.env.PORT) || DEFAULT_PORT;

/* Database connection strings */
export const USERS_DB_CONN_STR:string = process.env.HEROKU_POSTGRES_NAVY;
export const RECIPES_DB_CONN_STR:string = process.env.DATABASE_URL;

/* Google Sign In */
export const GOOGLE_CLIENT_ID:string = process.env.GOOGLE_SIGN_IN_CLIENT_ID_IOS;
