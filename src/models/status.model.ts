import { Schema, model } from 'mongoose';
import { IStatus } from '../interfaces';

const statusSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export default model<IStatus>('status', statusSchema);
