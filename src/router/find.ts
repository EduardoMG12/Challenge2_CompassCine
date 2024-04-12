import { Router } from 'express';
import { FindAllMoviesController } from '../modules/FindAllMovies';


const routerFind = Router();

routerFind.get('/allMovies', async (req, res) => {
	return await FindAllMoviesController.handle(req, res);
});
export { routerFind };