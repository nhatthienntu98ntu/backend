import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { IStatus } from '../../interfaces';
import StatusModel from '../../models/status.model';

export const getAllStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    StatusModel.find({})
        .then(result => {
            return res.status(200).json({
                message: 'Request success',
                request: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const getStatusByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const _id: String = req.params._id;
    StatusModel.findById(_id)
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Request success',
                status: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const addStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = {
        name: req.body.name,
        description: req.body.description,
    } as IStatus;
    StatusModel.create(status)
        .then(result => {
            return res.status(200).json({
                message: 'Added successfully',
                status: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const updateStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = {
        name: req.body.name,
        description: req.body.description,
    } as IStatus;
    StatusModel.updateOne(
        { _id: req.body._id },
        { $set: status },
        { new: true }
    )
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Update successful',
                Result: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const deleteStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    StatusModel.deleteOne({ _id: req.body._id })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Deleted successfully',
                Result: result,
            });
        })
        .catch(err => {
            next(err);
        });
};
