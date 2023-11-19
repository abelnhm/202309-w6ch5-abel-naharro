import fs from 'fs/promises';
import { Thing } from '../models/thing.js';

const fileName = './dist/data/things.json';

export const loadAllThings = async () => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  return JSON.parse(data);
};

export const loadThingById = async (id: number) => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  const jsonData = JSON.parse(data);
  const result: Thing = jsonData.find((item: Thing) => item.id === id);
  return result;
};
