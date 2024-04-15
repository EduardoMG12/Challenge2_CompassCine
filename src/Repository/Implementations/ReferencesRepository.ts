/* eslint-disable @typescript-eslint/no-explicit-any */
import { updatesModels } from '../References';
import { Movie } from '../../models/movies';
import { Sala } from '../../models/sala';
import { Sessao } from '../../models/sessao';

export class ReferenceRepository implements updatesModels{
	async  updateFilmeWithSessao(filmeId: string, sessaoId: any): Promise<any> {
		const filme = await Movie.findById(filmeId);
		if(!filme) return null;
		if (!filme.sessoes.includes(sessaoId)) {
			filme.sessoes.push(sessaoId);
			await filme.save();
		}
	}
	async  updateSalaWithSessao(salaId: string, sessaoId: any): Promise<any> {
		const sala = await Sala.findById(salaId);
		if(!sala) return null;
		if (!sala.sessoes.includes(sessaoId)) {
			sala.sessoes.push(sessaoId);
			await sala.save();
		}
	}
	async  updateSessaoWithIngresso(sessaoId: string, ingressoId: any): Promise<any> {
		const sessao = await Sessao.findById(sessaoId);
		if(!sessao) return null;
		if (!sessao.ingressos.includes(ingressoId)) {
			sessao.ingressos.push(ingressoId);
			await sessao.save();
		}
	}
    
} 