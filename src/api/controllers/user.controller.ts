import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { IUser, IUserLogin } from '../../interfaces';
import UserModel from '../../models/user.model';
// import { generateToken } from '../../utils/generateToken';
import { UserService } from '../../services';

export const getAllUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    await UserService.getAllUserService()
        .then(data => {
            return res.status(200).json({
                message: 'Request successfully',
                request: data,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const loginUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userLogin: IUserLogin = {
        email: req.body.email,
        password: req.body.password,
    };
    await UserService.loginUserService(userLogin)
        .then(result => {
            res.status(200).json({
                message: 'Login success',
                Request: {
                    token: result.token,
                    expiresIn: result.expiresIn,
                },
            });
        })
        .catch(err => {
            next(err);
        });

    // UserModel.find({ email: req.body.email })
    //     .exec()
    //     .then(user => {
    //         if (user.length < 1) {
    //             return res.status(404).json({
    //                 message: 'User not exist',
    //             });
    //         }
    //         bcrypt.compare(
    //             req.body.password,
    //             user[0].password,
    //             (err, result) => {
    //                 if (err) {
    //                     next(err);
    //                 }
    //                 if (result) {
    //                     const token = generateToken({
    //                         email: user[0].email,
    //                         userId: user[0]._id,
    //                     });
    //                     return res.status(200).json({
    //                         message: 'Auth success',
    //                         token: token,
    //                     });
    //                 }
    //                 res.status(201).json({
    //                     message: 'Incorrect password',
    //                 });
    //             }
    //         );
    //     })
    //     .catch(err => {
    //         next(err);
    //     });
};

export const signupUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
};

export const getOneUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id: String = req.params.id;
    UserModel.findById(id)
        .populate('statusId')
        .exec(function(err, data) {
            if (err) {
                next(err);
            }
            if (data) {
                return res.status(200).json(data);
            }
        });
};

//*Edit One User
export const updateUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
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
    } as IUser;
    await UserModel.updateOne(
        { _id: req.body._id },
        {
            $set: { ...user },
        },
        {
            new: true,
        }
    )
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            next(err);
        });
};

export const disableUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        next(error);
    }
};
