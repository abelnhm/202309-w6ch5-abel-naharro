import { Request, Response } from 'express';
import {
  loadAllThings,
  loadThingById,
  createThing,
  deleteThing,
  updateThing,
} from '../repo/api.repo.js';
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

export const delThing = async (req: Request, res: Response) => {
  const response = await deleteThing(Number(req.params.id));
  res.json(response);
};

export const setThing = async (req: Request, res: Response) => {
  const response = await updateThing(Number(req.params.id), req.body);
  res.json(response);
};
