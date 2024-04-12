import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { router } from '../src/router';
import { mongoosee } from '../src/database/mongoose';
import { routerFind } from '../src/router/find';

const app = express();
app.use(cors());

app.use(express.static(join(__dirname, '/../src/public')));

app.use(express.json());

mongoosee();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/register',router);
app.use('/find',routerFind);


dotenv.config();

export default app;