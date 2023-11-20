import { Router as createRouter } from 'express';
import { ThingsController } from '../controller/api.controller.js';
import createDebug from 'debug';

const debug = createDebug('W7E:tasks:router');

export const apiRouter = createRouter();
debug('Starting');

const controller = new ThingsController();

apiRouter.get('/', controller.getAll.bind(controller));
apiRouter.get('/:id', controller.getById.bind(controller));
apiRouter.post('/', controller.addThing.bind(controller));
apiRouter.delete('/:id', controller.delThing.bind(controller));
apiRouter.patch('/:id', controller.setThing.bind(controller));
