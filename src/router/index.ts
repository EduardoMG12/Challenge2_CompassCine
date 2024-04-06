import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';

const router = Router();

router.post('/registerMovie', (req, res) => {
	return createMovieController.handle(req, res);
});

router.post('/registerRoom', (req, res) => {
	return createRoomController.handle(req, res);
});

export { router };