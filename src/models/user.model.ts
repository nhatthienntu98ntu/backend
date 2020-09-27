import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        default: null,
    },
    password: { type: String, required: true, default: null },
    firstName: { type: String, required: true, default: null },
    lastName: { type: String, required: true, default: null },
    avatar: { type: String, required: true, default: null },
    gender: { type: Boolean, required: true, default: null },
    birthday: { type: Date, required: true, default: null },
    phones: [{ type: String, required: true, default: [] }],
    descriptionBlocked: { type: String, required: true, default: null },
    groupRoleIds: [
        { type: String, required: true, default: [], ref: 'GroupRoles' },
    ],
    addressIds: [
        { type: String, required: true, default: [], ref: 'Addresses' },
    ],
    pollResponseIds: [
        { type: String, required: false, default: [], ref: 'PollResponses' },
    ],
    statusId: [{ type: String, required: true, default: [], ref: 'status' }],
    blockedById: { type: String, required: false, default: null, ref: 'users' },
    blockedAt: { type: Date, required: false, default: null },
    createdAt: { type: Date, required: true, default: null },
});

export default model<IUser>('users', userSchema);
