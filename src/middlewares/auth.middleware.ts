import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { tokenSecret } from '../config';
import { ITokenDecode } from '../interfaces';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization') || req.query.token;

    if (!token) {
        const error = new Error('Unauthenticated');
        res.locals.statusCode = 401;
        next(error);
    }

    try {
        const decode = verify(token as string, tokenSecret) as ITokenDecode;
        res.locals.decode = decode;
        next();
    } catch (error) {
        res.locals.statusCode = 401;
        next(error);
    }
};

export const checkPermission = (permission: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { decode }: Record<string, ITokenDecode> = res.locals;

        if (!decode) {
            const error = new Error('Unauthenticated');
            res.locals.statusCode = 401;
            next(error);
        }

        if (decode.groupRoleIds.includes('Super User')) {
            next();
        }

        const permissionLength = permission.length;
        for (let i = 0; i < permissionLength; ++i) {
            if (!decode.groupRoleIds.includes(permission[i])) {
                const error = new Error('Forbidden');
                res.locals.statusCode = 403;
                next(error);
            }
        }

        next();
    };
};
