import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository'
import { DeleteMovieController } from './DeleteMovieController'
import { DeleteMovieUseCase } from './DeleteMovieUseCase'

const movieRepository = new PostgreeMovieRepository()
const deleteMovieUseCase = new DeleteMovieUseCase(movieRepository)
const deleteMovieController = new DeleteMovieController(deleteMovieUseCase)

export { deleteMovieController, deleteMovieUseCase }