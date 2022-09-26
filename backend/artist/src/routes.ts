import express from 'express';
import { container } from 'tsyringe';
import { CreateService } from './service/create';

export const router = express.Router();

const createService: CreateService = container.resolve(CreateService);

router.get('/', async (req, res) => res.send('Hello World!'));

router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await createService.execute(req.body));
  } catch (err) {
    next(err);
  }
});
