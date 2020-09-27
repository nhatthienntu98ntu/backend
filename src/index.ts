import express from 'express';
import { json, urlencoded } from 'body-parser';

import { port, mongoURI } from './config';
import connectDB from './connectDB';
import logger from './utils/logger';

import apiRoute from './api/routes';
import handleError from './helpers/handleError.helper';
import handleNotFound from './helpers/handleNotFound.helper';

const app = express();

connectDB(mongoURI, app);

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.use(handleNotFound);
app.use(handleError);

app.on('ready', () =>
    app.listen(port, () => logger.info(`App running on port ${port}`))
);
