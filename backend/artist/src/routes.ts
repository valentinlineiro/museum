import express from 'express';
import { v4 as uuid } from 'uuid';
import { ApiError } from './errors';
import { CreateUseCase } from './use-case/create';

export const router = express.Router();

const createUseCase: CreateUseCase = new CreateUseCase();

router.get('/', async (req, res) => res.send('Hello World!'));

router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(createUseCase.execute(req.body));
  } catch (err) {
    next(err);
  }
});
