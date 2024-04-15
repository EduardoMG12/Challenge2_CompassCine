import { ReferenceUpdateFilmeWithSessaoController } from './ReferenceUpdateFilmeWithSessaoController';
import { ReferenceUpdateSalaWithSessaoController } from './ReferenceUpdateSalaWithSessaoController';
import { ReferenceUpdateSessaoWithIngressoController } from './ReferenceUpdateSessaoWithIngressoController';
import { ReferenceUseCase } from './ReferenceUseCase';
import { ReferenceRepository } from '../../Repository/Implementations/ReferencesRepository';


export const referenceRepository = new ReferenceRepository();
export const referenceUseCase = new ReferenceUseCase(referenceRepository);
export const referenceUpdateFilmeWithSessaoController = new ReferenceUpdateFilmeWithSessaoController(referenceUseCase);
export const referenceUpdateSalaWithSessaoController = new ReferenceUpdateSalaWithSessaoController(referenceUseCase);
export const referenceUpdateSessaoWithIngressoController = new ReferenceUpdateSessaoWithIngressoController(referenceUseCase);