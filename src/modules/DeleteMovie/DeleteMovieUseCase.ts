import { IMovieRepository } from '../../Repository/IMovieRepository';

export class DeleteMovieUseCase {
	constructor(private movieRepository: IMovieRepository) {}

	async execute(movieId: string): Promise<void> {
		const existingMovie = await this.movieRepository.findById(movieId);
		if (!existingMovie) {
			throw new Error('Filme não encontrado');
		}

		await this.movieRepository.delete(movieId.toString());
	}
}