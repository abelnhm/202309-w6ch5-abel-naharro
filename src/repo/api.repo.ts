import fs from 'fs/promises';
import { Post } from '../models/post.js';

const fileName = './dist/data/posts.json';

export const loadAllPost = async () => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  return JSON.parse(data);
};

export const loadPostById = async (id: number) => {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  const jsonData = JSON.parse(data);
  const result: Post = jsonData.find((item: Post) => item.id === id);
  return result;
};
