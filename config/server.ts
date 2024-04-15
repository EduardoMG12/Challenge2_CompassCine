import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { mongoosee } from '../src/database/mongoose';
import routerRegister from '../src/router/register';
import routerFind from '../src/router/find';
import routerDelete  from '../src/router/delete';
import routerUpdate from '../src/router/update';

const app = express();
app.use(cors());

app.use(express.static(join(__dirname, '/../src/public')));

app.use(express.json());

mongoosee();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/register',routerRegister);
app.use('/find',routerFind);
app.use('/delete', routerDelete);
app.use('/update', routerUpdate);


dotenv.config();

export default app;