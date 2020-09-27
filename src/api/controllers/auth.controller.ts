import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../services';

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { token, expiresIn } = await AuthService.login(req.body);
        return res.status(200).json({ token, expiresIn });
    } catch (error) {
        res.locals.statusCode = 404;
        next(error);
    }
};
