import { Router } from 'express';
import { findAllMoviesController } from '../modules/FindAllMovies';


const routerFind = Router();

routerFind.get('/allMovies', async (req, res) => {
	return await findAllMoviesController.handle(req, res);
});
export { routerFind };