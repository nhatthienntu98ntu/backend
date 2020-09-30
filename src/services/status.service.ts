import { IStatus } from '../interfaces';
import statusModel from '../models/status.model';

export const getAllStatus = async () => {
    const status = await statusModel.find({});

    return status;
};

export const addStatusService = async (status: IStatus) => {
    const name = await statusModel.find({ name: status.name });

    if (name.length >= 1) {
        throw new Error(`Status name is exist ${status.name}`);
    }

    const result = await statusModel.create(status);

    return result;
};

export const updateStatusService = async (statusUpdate: IStatus) => {
    const checkStatus = await statusModel.findById({ _id: statusUpdate._id });

    if (!checkStatus) {
        throw new Error('Status not exist');
    }

    return await statusModel.updateOne(
        { _id: statusUpdate._id },
        { $set: statusUpdate }
    );
};

export const deleteStatusService = async (_id: String) => {
    const checkStatus = await statusModel.findById(_id);

    if (!checkStatus) {
        throw new Error('Status not exist');
    }

    return statusModel.deleteOne({ _id: _id });
};
