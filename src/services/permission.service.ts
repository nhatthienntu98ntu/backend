import { IPermissions } from '../interfaces';
import permissionModel from '../models/permission.model';

export const getAllPermissionService = async () => {
    return await permissionModel.find({});
};

export const addPermissionService = async (permission: IPermissions) => {
    const name = await permissionModel.find({ name: permission.name });

    if (name.length >= 1) {
        throw new Error(`Permission name is exist ${permission.name}`);
    }

    return await permissionModel.create(permission);
};

export const updatePermissionService = async (
    permissionUpdate: IPermissions
) => {
    const checkPermission = await permissionModel.findById({
        _id: permissionUpdate._id,
    });

    if (!checkPermission) {
        throw new Error('Permission not exist');
    }

    return await permissionModel.updateOne(
        { _id: permissionUpdate._id },
        { $set: permissionUpdate }
    );
};

export const deletePermissionService = async (_id: String) => {
    const checkPermission = await permissionModel.findById(_id);

    if (!checkPermission) {
        throw new Error('Permission not exist');
    }

    return permissionModel.deleteOne({ _id: _id });
};
