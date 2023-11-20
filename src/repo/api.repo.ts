import fs from 'fs/promises';
import { Thing } from '../entities/thing.js';
import { HttpError } from '../types/http.error.js';
import createDebug from 'debug';
// Import { Repository } from './repo.js';

const debug = createDebug('W7E:file:api.repo');

// Export class ThingsFileRepo implements Repository<Thing>
export class ThingsFileRepo {
  file: string;
  things: Thing[];
  constructor() {
    debug('Instantiated - ThingsFileRepo');
    this.file = './data/things.json';
    this.things = [];
    this.loadAllThings();
  }

  async loadAllThings() {
    const data = await fs.readFile(this.file, { encoding: 'utf-8' });
    return JSON.parse(data);
  }

  // Async loadAll(): Promise<Thing[]> {
  //   return this.things;
  // }

  async loadThingById(id: number) {
    const data = await fs.readFile(this.file, { encoding: 'utf-8' });
    const jsonData = JSON.parse(data);
    const result: Thing = jsonData.find((item: Thing) => item.id === id);
    if (!result) throw new HttpError(404, 'Not Found', 'GetById not possible');
    return result;
  }

  async createThing(thing: Partial<Thing>) {
    const data = await fs.readFile(this.file, { encoding: 'utf-8' });
    const jsonData = JSON.parse(data);
    const newThing = { ...thing, id: new Date().getTime() };
    jsonData.push(newThing);

    try {
      await fs.writeFile(this.file, JSON.stringify(jsonData), {
        encoding: 'utf-8',
      });
    } catch (err) {
      console.error(err);
    }

    return jsonData.slice(-1);
  }

  async updateThing(id: number, thing: Partial<Thing>) {
    const data = await fs.readFile(this.file, { encoding: 'utf-8' });
    const jsonData = JSON.parse(data);
    const resultSearch = this.things.find((item) => item.id === id);
    if (!resultSearch)
      throw new HttpError(404, 'Not Found', 'Update not possible');
    const result: Thing = jsonData.map((item: Thing) =>
      item.id === id ? { ...item, ...thing } : item
    );

    await fs.writeFile(this.file, JSON.stringify(result), {
      encoding: 'utf-8',
    });

    return result;
  }

  async deleteThing(id: number) {
    const data = await fs.readFile(this.file, { encoding: 'utf-8' });
    const jsonData = JSON.parse(data);
    const result = jsonData.filter((item: Thing) => item.id !== id);
    if (result.length === this.things.length) {
      throw new HttpError(404, 'Not Found', 'Delete not possible');
    }

    await fs.writeFile(this.file, JSON.stringify(result), {
      encoding: 'utf-8',
    });

    return result;
  }
}
