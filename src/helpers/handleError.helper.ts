import { Request, Response, NextFunction, response } from 'express';
import { isCelebrateError, CelebrateError } from 'celebrate';
import logger from '../utils/logger';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    if (isCelebrateError(err)) {
        const error = err as CelebrateError;
        const details: any = {};
        error.details.forEach((value, key) => {
            details[key] = value.details.map(value => ({
                keys: value.path[0],
                message: value.message.replace(/"/g, ''),
                type: value.type,
            }));
        });

        return res.status(400).json({
            message: error.message,
            details,
        });
    }

    return res.status(res.locals.statusCode || 500).json({
        message: err.message,
    });
};
