import mongoose, { model } from 'mongoose';

const salaSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	capacidade: {
		type: Number,
		required: true
	},
	sessoes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sessao'
	}]
});
  
export const Sala = model('MovSalaie', salaSchema);