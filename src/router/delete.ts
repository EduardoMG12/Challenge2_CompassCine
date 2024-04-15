import { Router } from 'express';
import { deleteMovieController } from '../modules/DeleteMovie';
import { deleteSessionsController } from '../modules/DeleteSessions';
import { deleteRoomController } from '../modules/DeleteRoom';

const router = Router();

router.delete('/movieId/:id', (request, response) => {
	return deleteMovieController.handle(request, response);
});

router.delete('/sessionId/:id', (request, response) => {
	return deleteSessionsController.handle(request, response);
});

router.delete('/roomId/:id',(req,res)=>{
	return deleteRoomController.handle(req,res);
});

export default router;