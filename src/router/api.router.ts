import { Router as createRouter } from 'express';
import {
  getAll,
  getById,
  addThing,
  delThing,
  setThing,
} from '../controller/api.controller.js';

export const apiRouter = createRouter();

apiRouter.get('/', getAll);
apiRouter.get('/:id', getById);
apiRouter.post('/', addThing);
apiRouter.delete('/:id', delThing);
apiRouter.patch('/:id', setThing);
