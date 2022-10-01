import express from 'express';
import { CreateService } from '../service/create';
import { ListService } from '../service/list';

export function createRouter(
  createService: CreateService,
  listService: ListService
) {
  const router = express.Router();
  router.get('/', async (req, res, next) => {
    res.json({ status: 'UP' });
  });
  router.post('/search', async (req, res, next) => {
    try {
      res.json(await listService.execute());
    } catch (err) {
      next(err);
    }
  });
  router.post('/', async (req, res, next) => {
    try {
      res.status(201).json(await createService.execute(req.body));
    } catch (err) {
      next(err);
    }
  });
  return router;
}
