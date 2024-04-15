import mongoose, { model } from 'mongoose';

const sessaoSchema = new mongoose.Schema({
	filmeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Filme' },
	salaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
	horario: Date,
	ingressos: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Ingresso' 
	}]
});


sessaoSchema.index({ salaId: 1, horario: 1 }, { unique: true });

export const Sessao = model('Sessao', sessaoSchema);