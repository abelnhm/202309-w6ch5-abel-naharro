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

export const createThing = async (thing: Partial<Thing>) => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  const jsonData = JSON.parse(data);
  const newThing = { ...thing, id: new Date().getTime() };
  jsonData.push(newThing);

  try {
    await fs.writeFile(fileName, JSON.stringify(jsonData), {
      encoding: 'utf-8',
    });
  } catch (err) {
    console.error(err);
  }

  return jsonData.slice(-1);
};

export const deleteThing = async (id: number) => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  const jsonData = JSON.parse(data);
  const result: Thing = jsonData.filter((item: Thing) => item.id !== id);
  try {
    await fs.writeFile(fileName, JSON.stringify(result), {
      encoding: 'utf-8',
    });
  } catch (err) {
    console.error(err);
  }

  return result;
};
