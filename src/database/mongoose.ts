import mongoose from 'mongoose';

export async function mongoosee() {
	try {
		await mongoose.connect('mongodb://localhost:27017/CompassCine');
		console.log('Conectado ao MongoDB com sucesso!');
	} catch (e) {
		console.log('Erro ao iniciar o projeto com o banco:', e);
	}
}