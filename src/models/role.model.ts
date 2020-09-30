import { model, Schema } from 'mongoose';
import { IRoles } from '../interfaces';

const roleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    permissionIds: [{ type: String, required: true, ref: 'Permissions' }],
    createdAt: { type: Date, required: false, default: new Date() },
});

export default model<IRoles>('roles', roleSchema);
