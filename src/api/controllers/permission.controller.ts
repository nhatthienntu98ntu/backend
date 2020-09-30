import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { IPermissions } from '../../interfaces';
import permissionModel from '../../models/permission.model';
import { PermissionService } from '../../services';

export const getAllPermissionController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    PermissionService.getAllPermissionService().then(result => {
        res.status(200).json({
            message: 'Request successfully',
            Response: result,
        });
    });
};

export const AddPermissionController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const permission = {
        name: req.body.name,
        description: req.body.description,
    } as IPermissions;
    PermissionService.addPermissionService(permission)
        .then(result => {
            res.status(200).json({
                message: 'Add successfully',
                Response: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const UpdatePermissionController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const permission = {
        _id: req.params._id,
        name: req.body.name,
        description: req.body.description,
    } as IPermissions;
    PermissionService.updatePermissionService(permission)
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

export const DeletePermissionController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    PermissionService.deletePermissionService(req.params._id).then(result => {
        res.status(200).json({
            message: 'Delete succesfully',
            Response: result,
        });
    });
};
