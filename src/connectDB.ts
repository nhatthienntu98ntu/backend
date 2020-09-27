import { Application } from 'express';
import { connect, connection } from 'mongoose';
import logger from './utils/logger';

const connectDB = (mongoURI: string, app: Application) => {
    connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    connection.on('error', err => logger.error('Connection error: ', err));
    connection.once('open', () => {
        logger.info('Mongodb connected');
        app.emit('ready');
    });
};

export default connectDB;
