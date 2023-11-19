import { Router as createRouter } from 'express';
import {
  getAll,
  getById,
  addThing,
  delThing,
  setThing,
} from '../controller/api.controller.js';

export const apiRouter = createRouter();

apiRouter.get('/', await getAll);
apiRouter.get('/:id', await getById);
apiRouter.post('/', await addThing);
apiRouter.delete('/:id', await delThing);
apiRouter.patch('/:id', await setThing);
