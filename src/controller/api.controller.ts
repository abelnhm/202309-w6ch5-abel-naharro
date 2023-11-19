import { Request, Response } from 'express';
import { loadAllThings, loadThingById } from '../repo/api.repo.js';

export const getAll = async (_req: Request, res: Response) => {
  res.json(await loadAllThings());
};

export const getById = async (req: Request, res: Response) => {
  res.json(await loadThingById(Number(req.params.id)));
};

export const addThing = async (req: Request, res: Response) => {
  res.json({ message: 'create thing' });
};
