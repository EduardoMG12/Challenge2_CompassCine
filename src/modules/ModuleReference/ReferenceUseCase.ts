/* eslint-disable @typescript-eslint/no-explicit-any */
import { updatesModels } from '../../Repository/References';

export class ReferenceUseCase{

	private updateRepository: updatesModels;
	constructor(updateRepository: updatesModels){
		this.updateRepository = updateRepository;
	}
	async executeUpdateFilmeWithSessao(filmeId: string, sessaoId: string): Promise<any>{
		console.log('chamou');
		console.log(filmeId);
		console.log(sessaoId);
		return await this.updateRepository.updateFilmeWithSessao(filmeId,sessaoId);
	}

	async executeupdateSalaWithSessao(salaId: string, sessaoId: string): Promise<any>{
		return await this.updateRepository.updateSalaWithSessao(salaId,sessaoId);
	}

	async executeUpdateSessaoWithIngresso(sessaoId: string, ingressoId: string): Promise<any>{
		return await this.updateRepository.updateSessaoWithIngresso(sessaoId,ingressoId);
	}
}