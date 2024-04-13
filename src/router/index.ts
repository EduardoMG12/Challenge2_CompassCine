import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { FindAllMoviesController } from '../modules/FindAllMovies';
import { createSessionController } from '../modules/CreateSession';
import { findAllRoomController } from '../modules/FindAllRooms';
import { findAllSessionsController } from '../modules/FindAllSessions';
import {FindByNameMovieController} from '../modules/FindByNameMovie';
import { deleteMovieController } from '../modules/DeleteMovie';
import { deleteSessionsController } from '../modules/DeleteSessions';
import { referenceUpdateFilmeWithSessaoController, referenceUpdateSalaWithSessaoController, referenceUpdateSessaoWithIngressoController } from '../modules/ModuleReference';
import { createTicketController } from '../modules/CreateTicket';
import { deleteRoomController } from '../modules/DeleteRoom';
import { findByIdMovieController } from '../modules/FindByIdMovie';
import { findByIdRoomController } from '../modules/FindByIdRoom';
import { findByNameRoomController } from '../modules/FindByNameRoom';
const router = Router();

router.post('/registerMovie', (req, res) => {
	return createMovieController.handle(req, res);
});
router.get('/allMovies',(req,res) =>{
	return FindAllMoviesController.handle(req,res);
});
router.get('/movieId/:id',(req,res)=>{
	return findByIdMovieController.handle(req,res);
});
router.get('/movie/:name', (req,res) =>{
	return FindByNameMovieController.handle(req,res);
});
router.delete('/delete/:id', (request, response) => {
	return deleteMovieController.handle(request, response);
});


router.post('/registerSession',(req,res) =>{
	return createSessionController.handle(req,res);
});
router.get('/allSessions',(req,res) =>{
	return findAllSessionsController.handle(req,res);
});
router.delete('/delete/sessao/:id', (request, response) => {
	return deleteSessionsController.handle(request, response);
});


router.post('/registerRoom', (req, res) => {
	return createRoomController.handle(req, res);
});
router.get('/allRooms',(req,res) =>{
	return findAllRoomController.handle(req,res);
});
router.get('/roomName/:nome',(req,res)=>{
	return findByNameRoomController.handle(req,res);
});
router.get('/roomId/:id',(req,res)=>{
	return findByIdRoomController.handle(req,res);
});
router.delete('/deleteRoom/:id',(req,res)=>{
	return deleteRoomController.handle(req,res);
});


router.post('/createTicket', (req, res) => {
	return createTicketController.handle(req, res);
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



export { router };