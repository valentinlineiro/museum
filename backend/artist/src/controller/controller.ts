import express from 'express';
import { container } from 'tsyringe';
import { CreateService } from '../service/create';
import { ListService } from '../service/list';

const createService: CreateService = container.resolve(CreateService);
const listService: ListService = container.resolve(ListService);

export const controller = express.Router();

controller.post('/search', async (req, res, next) => {
  try {
    res.json(await listService.execute());
  } catch (err) {
    next(err);
  }
});
controller.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await createService.execute(req.body));
  } catch (err) {
    next(err);
  }
});
