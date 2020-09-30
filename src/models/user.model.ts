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
    isDelete: { type: Boolean, required: false, default: false },
    phones: [{ type: String, required: true, default: null }],
    descriptionBlocked: { type: String, required: false, default: null },
    groupRoleIds: [
        { type: String, required: false, default: null, ref: 'grouproles' },
    ],
    addressIds: [
        { type: String, required: true, default: null, ref: 'addresses' },
    ],
    pollResponseIds: [
        { type: String, required: false, default: null, ref: 'pollresponses' },
    ],
    statusId: { type: String, required: false, default: null, ref: 'status' },
    blockedById: { type: String, required: false, default: null, ref: 'users' },
    deletedAt: { type: Date, required: false, default: null },
    blockedAt: { type: Date, required: false, default: null },
    createdAt: { type: Date, required: true, default: new Date() },
});

export default model<IUser>('users', userSchema);
