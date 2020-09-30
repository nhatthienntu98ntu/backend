import { IRoles } from '../interfaces';
import roleModel from '../models/role.model';

export const getAllRoleService = async () => {
    return await roleModel.find({});
};

export const addRoleService = async (role: IRoles) => {
    const name = await roleModel.find({ name: role.name });

    if (name.length >= 1) {
        throw new Error(`Role name is exist ${role.name}`);
    }

    return await roleModel.create(role);
};

export const updateRoleService = async (roleUpdate: IRoles) => {
    const checkRole = await roleModel.findById({
        _id: roleUpdate._id,
    });

    if (!checkRole) {
        throw new Error('Role not exist');
    }

    return await roleModel.updateOne(
        { _id: roleUpdate._id },
        { $set: roleUpdate }
    );
};

export const deleteRoleService = async (_id: String) => {
    const checkRole = await roleModel.findById(_id);

    if (!checkRole) {
        throw new Error('Role not exist');
    }

    return roleModel.deleteOne({ _id: _id });
};
