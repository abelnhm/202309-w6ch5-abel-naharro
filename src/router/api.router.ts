import { Router as createRouter } from 'express';
import { getAll, getById, addThing } from '../controller/api.controller.js';

export const apiRouter = createRouter();

apiRouter.get('/', getAll);
apiRouter.get('/:id', getById);
apiRouter.post('/', addThing);
