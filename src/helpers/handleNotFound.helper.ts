import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    res.locals.statusCode = 404;
    const error = new Error('Not found');
    next(error);
};
