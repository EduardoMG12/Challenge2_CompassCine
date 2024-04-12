import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { FindAllMoviesController } from '../modules/FindAllMovies';
import { createSessionController } from '../modules/CreateSession';
import { findAllRoomController } from '../modules/FindAllRooms';
import { findAllSessionsController } from '../modules/FindAllSessions';
import { deleteMovieController } from '../modules/DeleteMovie';
const router = Router();

router.post('/registerMovie', (req, res) => {
	return createMovieController.handle(req, res);
});
router.get('/allMovies',(req,res) =>{
	return FindAllMoviesController.handle(req,res);
});
router.post('/registerSession',(req,res) =>{
	return createSessionController.handle(req,res);
});
router.post('/registerRoom', (req, res) => {
	return createRoomController.handle(req, res);
});
router.get('/allRooms',(req,res) =>{
	return findAllRoomController.handle(req,res);
});

router.get('/allSessions',(req,res) =>{
	return findAllSessionsController.handle(req,res);
});

router.delete('/movies/:id', (request, response) => {
	return deleteMovieController.handle(request, response);
});

export { router };