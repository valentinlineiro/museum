import 'dotenv/config';
import express, { Application, Router } from 'express';
import cors from 'cors';
import { errorHandler } from './errors';
import { createRouter } from './controller/controller';
import { CreateService } from './service/create';
import { CreateRepository } from './repository/create';
import { MockDatabase } from './config/database/mock-database';
import { ListService } from './service/list';
import { DetaDatabase } from './config/database/deta-database';

export function createProductionApp(): Application {
  return createApp(
    createRouter(
      new CreateService(new CreateRepository(new DetaDatabase())),
      new ListService()
    )
  );
}

export function createTestApp(): Application {
  return createApp(
    createRouter(
      new CreateService(new CreateRepository(new MockDatabase())),
      new ListService()
    )
  );
}

function createApp(router: Router): Application {
  const app: Application = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(errorHandler);
  return app;
}
