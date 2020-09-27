import { config } from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = config();

if (envFound.error) {
    throw new Error('.env not found');
}

export const port = parseInt(process.env.PORT as string, 10);
export const mongoURI = process.env.MONGO_URI as string;
export const tokenSecret = process.env.TOKEN_SECRET as string;
export const tokenExpiresIn = process.env.TOKEN_EXPIRES_IN as string;
