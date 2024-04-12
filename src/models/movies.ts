import mongoose from 'mongoose';


const { Schema, model  } = mongoose;

const movieSchema = new mongoose.Schema({
	nome: String,
	descricao: String,
	imagemUrl: String,
	genero: String,
	atores: String,
	sessoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sessao' }]
});
export const Movie = model('Movie', movieSchema);