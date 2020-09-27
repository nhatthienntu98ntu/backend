import ms from 'ms';
import { ITokenDecode, IUser, IUserLogin } from '../interfaces';
import UserModel from '../models/user.model';
import { generateToken } from '../utils/generateToken';
import { tokenExpiresIn } from '../config';
import * as bcrypt from 'bcrypt';

export const loginUserService = async (userLogin: IUserLogin) => {
    const user = await UserModel.findOne({
        email: userLogin.email,
    });

    if (!user) {
        throw new Error(`User not exist! ${userLogin.email}`);
    }

    const passwordValid = await bcrypt.compare(
        userLogin.password,
        user.password
    );

    if (!passwordValid) {
        throw new Error('Invalid password');
    }

    const payload: ITokenDecode = {
        uid: user._id,
        groupRoleIds: user.groupRoleIds,
    };

    const token = generateToken(payload);
    const expiresIn = ms(tokenExpiresIn);

    return { token, expiresIn };
};

export const getAllUserService = async () => {
    const users = UserModel.find({})
        .populate([
            { path: 'statusId' },
            { path: 'blockedById' },
            // { path: 'addressIds' },
            // { path: 'groupRoleIds' },
            // { path: 'pollResponseIds' },
        ])
        .exec();
    return users;
};

export const signupUserService = async (userSignUp: IUser) => {
    const user = await UserModel.find({ email: userSignUp.email });

    if (user.length >= 1) {
        throw new Error('Email exists');
    }
};

UserModel.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'Email exists',
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    next(err);
                } else {
                    const user = {
                        email: req.body.email,
                        password: hash,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        avatar: req.body.avatar,
                        gender: req.body.gender,
                        birthday: req.body.birthday,
                        phones: req.body.phones,
                        descriptionBlocked: req.body.descriptionBlocked,
                        groupRoleIds: req.body.groupRoleIds,
                        addressIds: req.body.addressIds,
                        pollResponseIds: req.body.pollResponseIds,
                        statusId: req.body.statusId,
                        blockedById: req.body.blockedById,
                        createdAt: new Date(),
                    } as IUser;
                    UserModel.create(user)
                        .then(() => {
                            return res.status(201).json({
                                message: 'User create success',
                            });
                        })
                        .catch(err => {
                            next(err);
                        });
                }
            });
        }
    });
