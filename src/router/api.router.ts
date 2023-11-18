import { Router as createRouter } from 'express';
import { getAll, getById } from '../controller/api.controller.js';

export const apiRouter = createRouter();

apiRouter.get('/', getAll);
apiRouter.get('/:id', getById);
