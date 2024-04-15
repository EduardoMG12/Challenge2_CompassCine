import mongoose, { model } from 'mongoose';



const ingressoSchema = new mongoose.Schema({
	sessaoId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sessao',
	},
	numeroAssento: {
		type: String,
	},
	valorAssento: {
		type: Number,
	}
});
  
ingressoSchema.index({ sessaoId: 1, numeroAssento: 1 }, { unique: true });
  
export const Ingresso = model('Ingresso', ingressoSchema); 