import { Router } from 'express';
import { FindAllMoviesController } from '../modules/FindAllMovies';
import { findByIdMovieController } from '../modules/FindByIdMovie';
import {FindByNameMovieController} from '../modules/FindByNameMovie';
import { findAllSessionsController } from '../modules/FindAllSessions';
import { findByIdSessionController } from '../modules/FindByIdSession';
import { findByIdRoomController } from '../modules/FindByIdRoom';
import { findByNameRoomController } from '../modules/FindByNameRoom';
import { findAllTicketController } from '../modules/FindAllTicket';
import { findByIdTicketController } from '../modules/FindByIdTicket';
import { findAllRoomController } from '../modules/FindAllRooms';

const router = Router();

// right
router.get('/allMovies', async (req, res) => {
	return await FindAllMoviesController.handle(req, res);
});
// right 
router.get('/allRooms',(req,res) =>{
	return findAllRoomController.handle(req,res);
});
// right
router.get('/allSessions',(req,res) =>{
	return findAllSessionsController.handle(req,res);
});
// right
router.get('/allTicket',(req,res)=>{
	return findAllTicketController.handle(req,res);
});

// right
router.get('/movieId/:id',(req,res)=>{
	return findByIdMovieController.handle(req,res);
});
// right
router.get('/sessionId/:id',(req,res)=>{
	return findByIdSessionController.handle(req,res);
});
// right
router.get('/roomId/:id',(req,res)=>{
	return findByIdRoomController.handle(req,res);
});

router.get('/ticketId/:id',(req,res)=>{
	return findByIdTicketController.handle(req,res);
});

// right
router.get('/movie/:name', (req,res) =>{
	return FindByNameMovieController.handle(req,res);
});

// right
router.get('/roomName/:nome',(req,res)=>{
	return findByNameRoomController.handle(req,res);
});



export default router;