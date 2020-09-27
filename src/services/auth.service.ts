import ms from 'ms';
import { ITokenDecode, IUserLogin } from '../interfaces';
import User from '../models/user.model';
import { generateToken } from '../utils/generateToken';
import { tokenExpiresIn } from '../config';

export const login = async (userLogin: IUserLogin) => {
    const user = await User.findOne(userLogin);

    if (!user) {
        throw new Error('Incorrect username or password.');
    }

    const payload: ITokenDecode = {
        uid: user.id,
        groupRoleIds: user.groupRoleIds,
    };

    const token = generateToken(payload);
    const expiresIn = ms(tokenExpiresIn);

    return { token, expiresIn };
};
