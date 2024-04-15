import { ReferenceUpdateFilmeWithSessaoController } from './ReferenceUpdateFilmeWithSessaoController';
import { ReferenceUpdateSalaWithSessaoController } from './ReferenceUpdateSalaWithSessaoController';
import { ReferenceUpdateSessaoWithIngressoController } from './ReferenceUpdateSessaoWithIngressoController';
import { ReferenceUseCase } from './ReferenceUseCase';
import { PostgreeReferenceRepository } from '../../Repository/Implementations/ReferencesRepository';


export const postgreeReferenceRepository = new PostgreeReferenceRepository();
export const referenceUseCase = new ReferenceUseCase(postgreeReferenceRepository);
export const referenceUpdateFilmeWithSessaoController = new ReferenceUpdateFilmeWithSessaoController(referenceUseCase);
export const referenceUpdateSalaWithSessaoController = new ReferenceUpdateSalaWithSessaoController(referenceUseCase);
export const referenceUpdateSessaoWithIngressoController = new ReferenceUpdateSessaoWithIngressoController(referenceUseCase);