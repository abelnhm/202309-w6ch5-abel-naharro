import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { apiRouter } from './router/api.router.js';

export const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/things', apiRouter);
