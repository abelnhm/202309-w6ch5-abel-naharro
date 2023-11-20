import { Request, Response } from 'express';
import { ThingsFileRepo } from '../repo/api.repo.js';
import { Thing } from '../entities/thing.js';
import createDebug from 'debug';

const debug = createDebug('W7E:controller');

export class ThingsController {
  repo: ThingsFileRepo;

  constructor() {
    debug('Instantiated - ThingsController');
    this.repo = new ThingsFileRepo();
  }

  async getAll(_req: Request, res: Response) {
    res.json(await this.repo.loadAllThings());
  }

  async getById(req: Request, res: Response) {
    res.json(await this.repo.loadThingById(Number(req.params.id)));
  }

  async addThing(req: Request, res: Response) {
    const thing: Partial<Thing> = req.body;
    const response = await this.repo.createThing(thing);
    res.json(response);
  }

  async delThing(req: Request, res: Response) {
    const response = await this.repo.deleteThing(Number(req.params.id));
    res.json(response);
  }

  async setThing(req: Request, res: Response) {
    const response = await this.repo.updateThing(
      Number(req.params.id),
      req.body
    );
    res.json(response);
  }
}
