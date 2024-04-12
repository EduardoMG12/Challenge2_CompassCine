/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMovieRepository } from '../../Repository/IMovieRepository';

export class DeleteMovieUseCase {
	constructor(private movieRepository: IMovieRepository) {}

	async execute(movieId: string): Promise<any> {
		const existingMovie = await this.movieRepository.findById(movieId);
		console.log(existingMovie);
		if (!existingMovie) {
			throw new Error('Filme não encontrado');
		}

		await this.movieRepository.delete(movieId.toString());
		return existingMovie;
	}
}