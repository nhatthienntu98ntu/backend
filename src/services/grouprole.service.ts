import { IGroupRoles } from '../interfaces';
import groupRoleModel from '../models/grouprole.model';

export const getAllGroupRoleService = async () => {
    return await groupRoleModel.find({});
};

export const addGroupRoleService = async (grouprole: IGroupRoles) => {
    const name = await groupRoleModel.find({ name: grouprole.name });

    if (name.length >= 1) {
        throw new Error(`GroupRole name is exist ${grouprole.name}`);
    }

    return await groupRoleModel.create(grouprole);
};

export const updateGroupRoleService = async (grouproleUpdate: IGroupRoles) => {
    const checkGrouprole = await groupRoleModel.findById({
        _id: grouproleUpdate._id,
    });

    if (!checkGrouprole) {
        throw new Error('Grouprole not exist');
    }

    return await groupRoleModel.updateOne(
        { _id: grouproleUpdate._id },
        { $set: grouproleUpdate }
    );
};

export const deleteGroupRoleService = async (_id: String) => {
    const checkRole = await groupRoleModel.findById(_id);

    if (!checkRole) {
        throw new Error('Role not exist');
    }

    return groupRoleModel.deleteOne({ _id: _id });
};
