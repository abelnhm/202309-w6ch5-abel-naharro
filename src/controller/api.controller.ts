import { Request, Response } from 'express';
import { loadAllPost, loadPostById } from '../repo/api.repo.js';

export const getAll = async (_req: Request, res: Response) => {
  res.json(await loadAllPost());
};

export const getById = async (req: Request, res: Response) => {
  res.json(await loadPostById(Number(req.params.id)));
};

export const addPost = async (req: Request, res: Response) => {
  res.json({ message: 'create post' });
};
