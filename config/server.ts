import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { router } from '../src/router';

const app = express();
app.use(cors());

app.use(express.static(join(__dirname, '/../src/public')));

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/register',router);
dotenv.config();

export default app;