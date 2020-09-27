import { sign } from 'jsonwebtoken';
import { tokenExpiresIn, tokenSecret } from '../config';

export const generateToken = (payload: string | object) => {
    return sign(payload, tokenSecret, { expiresIn: tokenExpiresIn });
};
