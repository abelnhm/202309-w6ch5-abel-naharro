import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

export const app = express();
app.use(cors());
app.use(morgan('dev'));