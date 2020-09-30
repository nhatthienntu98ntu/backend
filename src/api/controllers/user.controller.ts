import { NextFunction, Request, Response } from 'express';
import { IUser, IUserDelete, IUserLogin } from '../../interfaces';
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

export const signinUserController = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userLogin: IUserLogin = {
        email: req.body.email,
        password: req.body.password,
    };
    UserService.signinUserService(userLogin)
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
    const user = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        avatar: req.body.avatar,
        gender: req.body.gender,
        birthday: req.body.birthday,
        phones: req.body.phones,
        addressIds: req.body.addressIds,
        createdAt: new Date(),
    } as IUser;

    await UserService.signupUserService(user)
        .then(response => {
            res.status(200).json({
                message: 'Add user successfully',
                Response: response,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const getOneUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const _id: String = req.params._id;
    await UserService.getOneUserService(_id)
        .then(user => {
            res.status(200).json({
                message: 'Requet successfully',
                Response: user,
            });
        })
        .catch(err => {
            next(err);
        });
};

//*Edit One User
export const updateUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = {
        _id: req.params._id,
        // password: req.body.password,
        // firstName: req.body.firstName,
        // lastName: req.body.lastName,
        // avatar: req.body.avatar,
        // gender: req.body.gender,
        // birthday: req.body.birthday,
        // phones: req.body.phones,
        // descriptionBlocked: req.body.descriptionBlocked,
        // groupRoleIds: req.body.groupRoleIds,
        // addressIds: req.body.addressIds,
        // pollResponseIds: req.body.pollResponseIds,
        statusId: req.body.statusId,
    } as IUser;

    await UserService.updateUserService(user)
        .then(result => {
            res.status(200).json({
                message: 'Update successfully',
                Response: result,
            });
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
    const userDelete = {
        _idUser: req.params._idUser,
        _idUserBlock: req.params._idUserBlock,
    } as IUserDelete;

    await UserService.disableUserService(userDelete)
        .then(result => {
            res.status(200).json({
                message: 'Delete successfully',
                Response: result,
            });
        })
        .catch(err => {
            next(err);
        });
};
