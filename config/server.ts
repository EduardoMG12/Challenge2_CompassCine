import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import * as dotenv from 'dotenv';


const app = express();

app.use(express.static(join(__dirname, '/../src/public')));

app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();

export default app;