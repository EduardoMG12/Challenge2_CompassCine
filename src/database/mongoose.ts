import mongoose from 'mongoose';

export async function mongoosee() {
	try {
		console.log('CHEGOU AO BANCO');
		await mongoose.connect('mongodb://mongo:27017/compass');
		console.log('Conectado ao MongoDB com sucesso!');
	} catch (e) {
		console.log('Erro ao iniciar o projeto com o banco:', e);
	}
}