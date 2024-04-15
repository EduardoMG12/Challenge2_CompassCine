import mongoose, { model } from 'mongoose';

const sessaoSchema = new mongoose.Schema({
	filmeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Filme' },
	salaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
	horarioInicio: Date,
	horaFim: Date,
	ingressos: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Ingresso' 
	}]
});




export const Sessao = model('Sessao', sessaoSchema);