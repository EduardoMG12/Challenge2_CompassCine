import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { createSessionController } from '../modules/CreateSession';
import { buyTicketController } from '../modules/BuyTicket';

const router = Router();

router.post('/movie', (req, res) => {
	return createMovieController.handle(req, res);
});

router.post('/room', (req, res) => {
	return createRoomController.handle(req, res);
});

router.post('/session',(req,res) =>{
	return createSessionController.handle(req,res);
});

router.post('/ticket', (req, res) => {
	return buyTicketController.handle(req, res);
});

export default router;