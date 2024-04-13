import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { FindAllMoviesController } from '../modules/FindAllMovies';
import { createSessionController } from '../modules/CreateSession';
import { findAllRoomController } from '../modules/FindAllRooms';
import { findAllSessionsController } from '../modules/FindAllSessions';
import { deleteMovieController } from '../modules/DeleteMovie';
import { deleteSessionsController } from '../modules/DeleteSessions';
import { referenceUpdateFilmeWithSessaoController, referenceUpdateSalaWithSessaoController, referenceUpdateSessaoWithIngressoController } from '../modules/ModuleReference';
import { createTicketController } from '../modules/CreateTicket';
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

router.delete('/delete/:id', (request, response) => {
	return deleteMovieController.handle(request, response);
});

router.delete('/delete/sessao/:id', (request, response) => {
	return deleteSessionsController.handle(request, response);
});



router.post('/updateFilmeComSessao', (req, res) => {
	return referenceUpdateFilmeWithSessaoController.handle(req, res);
});


router.post('/updateSalaComSessao', (req, res) => {
	return referenceUpdateSalaWithSessaoController.handle(req, res);
});


router.post('/updateSessaoComIngresso', (req, res) => {
	return referenceUpdateSessaoWithIngressoController.handle(req, res);
});




router.post('/createTicket', (req, res) => {
	return createTicketController.handle(req, res);
});


export { router };