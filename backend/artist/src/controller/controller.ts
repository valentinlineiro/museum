import express from 'express';
import { container } from 'tsyringe';
import { CreateService } from '../service/create';

const createService: CreateService = container.resolve(CreateService);

export const controller = express.Router();

controller.get('/', async (req, res) => res.send('Hello World!'));
controller.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await createService.execute(req.body));
  } catch (err) {
    next(err);
  }
});
