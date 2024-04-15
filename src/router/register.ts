import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { createSessionController } from '../modules/CreateSession';
import { createTicketController } from '../modules/CreateTicket';

const router = Router();

// right
router.post('/movie', (req, res) => {
	return createMovieController.handle(req, res);
});

// right
router.post('/room', (req, res) => {
	return createRoomController.handle(req, res);
});

// right
router.post('/session',(req,res) =>{
	return createSessionController.handle(req,res);
});

// right
router.post('/ticket', (req, res) => {
	return createTicketController.handle(req, res);
});

export default router;