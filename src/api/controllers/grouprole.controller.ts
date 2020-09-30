import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { IGroupRoles } from '../../interfaces';
import { GroupRoleService } from '../../services';

export const getAllGroupRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    GroupRoleService.getAllGroupRoleService().then(result => {
        res.status(200).json({
            message: 'Request successfully',
            Response: result,
        });
    });
};
export const AddGroupRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const grouprole = {
        name: req.body.name,
        description: req.body.description,
        roleIds: req.body.roleIds,
    } as IGroupRoles;
    GroupRoleService.addGroupRoleService(grouprole)
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
export const UpdateGroupRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const grouprole = {
        _id: req.params._id,
        name: req.body.name,
        description: req.body.description,
        roleIds: req.body.roleIds,
    } as IGroupRoles;
    GroupRoleService.updateGroupRoleService(grouprole)
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
export const DeleteGroupRoleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    GroupRoleService.deleteGroupRoleService(req.params._id).then(result => {
        res.status(200).json({
            message: 'Delete succesfully',
            Response: result,
        });
    });
};
