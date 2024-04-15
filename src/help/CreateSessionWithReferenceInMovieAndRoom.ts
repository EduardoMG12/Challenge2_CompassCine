/* eslint-disable @typescript-eslint/no-explicit-any */
export function createSessionWithReferenceInMovieAndRoom(sessionsId: string,movieId: string,roomId: string,entitieMovie: any){
	try{
		const movie = new entitieMovie.findById(movieId);
		if(!movie) {
			throw new Error('Filme não encontrado!');
		}


		if(!movie.sessoes.includes(sessionsId)){
			movie.sessoes.push(sessionsId);
		}else{
			throw new Error('sessao ja cadastrada');
		}
	}catch(e){
		console.log('erro ao cadastrar sessao no filme');
		return e;
	}
}