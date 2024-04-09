import { Router } from 'express';
import { createMovieController } from '../modules/CreateMovie';
import { createRoomController } from '../modules/CreateRoom';
import { DeleteMovieController } from '../modules/DeleteMovie/DeleteMovieController'
import { DeleteMovieUseCase } from '../modules/DeleteMovie/DeleteMovieUseCase'
import { PostgreeMovieRepository } from '../Repository/Implementations/PostgreMovieRepository'


const router = Router();

router.post('/registerMovie', (req, res) => {
	return createMovieController.handle(req, res);
});

router.post('/registerRoom', (req, res) => {
	return createRoomController.handle(req, res);
});

const movieRepository = new PostgreeMovieRepository();

const deleteMovieUseCase = new DeleteMovieUseCase(movieRepository);

// Criar instância do controlador DeleteMovieController passando o caso de uso como argumento
const deleteMovieController = new DeleteMovieController(deleteMovieUseCase);

router.delete('/movies/:id', (request, response) => {
    // Chamar método handle da instância deleteMovieController
    return deleteMovieController.handle(request, response);
});

export { router };