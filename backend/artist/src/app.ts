import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import { errorHandler } from './errors';
import { controller } from './controller/controller';

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(controller);
app.use(errorHandler);
