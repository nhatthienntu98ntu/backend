import { model, Schema } from 'mongoose';
import { IGroupRoles } from '../interfaces';

const groupRoleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    roleIds: [{ type: String, required: true, ref: 'Roles' }],
    createdAt: { type: Date, required: false, default: new Date() },
});

export default model<IGroupRoles>('grouproles', groupRoleSchema);
