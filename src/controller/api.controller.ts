import { Request, Response } from 'express';
import { loadAllThings, loadThingById, createThing } from '../repo/api.repo.js';
import { Thing } from '../models/thing.js';

export const getAll = async (_req: Request, res: Response) => {
  res.json(await loadAllThings());
};

export const getById = async (req: Request, res: Response) => {
  res.json(await loadThingById(Number(req.params.id)));
};

export const addThing = async (req: Request, res: Response) => {
  const thing: Partial<Thing> = req.body;
  const response = await createThing(thing);
  res.json(response);
};
