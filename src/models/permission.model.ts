import { model, Schema } from 'mongoose';
import { IPermissions } from '../interfaces';

const permissionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: false, default: new Date() },
});

export default model<IPermissions>('permission', permissionSchema);
