import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.static(join(__dirname, '/../src/public')));

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();

export default app;