import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { IGroupRoles, IRoles } from '../../interfaces';
import { RoleService } from '../../services';

export const getAllRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    RoleService.getAllRoleService().then(result => {
        res.status(200).json({
            message: 'Request successfully',
            Response: result,
        });
    });
};
export const AddRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const role = {
        name: req.body.name,
        description: req.body.description,
        permissionIds: req.body.permissionIds,
    } as IRoles;
    RoleService.addRoleService(role)
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
export const UpdateRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const role = {
        _id: req.params._id,
        name: req.body.name,
        description: req.body.description,
        permissionIds: req.body.permissionIds,
    } as IRoles;
    RoleService.updateRoleService(role)
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
export const DeleteRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    RoleService.deleteRoleService(req.params._id).then(result => {
        res.status(200).json({
            message: 'Delete succesfully',
            Response: result,
        });
    });
};
