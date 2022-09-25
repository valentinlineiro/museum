import express, { Application } from 'express';
import { errorHandler } from './errors';
import { router } from './routes';

export const app: Application = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);
