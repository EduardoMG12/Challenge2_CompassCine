import { Router } from 'express';
import { deleteMovieController } from '../modules/DeleteMovie';
import { deleteSessionsController } from '../modules/DeleteSessions';
import { deleteRoomController } from '../modules/DeleteRoom';

const router = Router();
// right
router.delete('/movieId/:id', (request, response) => {
	return deleteMovieController.handle(request, response);
});
// right
router.delete('/sessionId/:id', (request, response) => {
	return deleteSessionsController.handle(request, response);
});
// right
router.delete('/roomId/:id',(req,res)=>{
	return deleteRoomController.handle(req,res);
});

export default router;