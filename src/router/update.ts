import { Router } from 'express';
import { updateMovieController } from '../modules/UpdateMovie';
import { referenceUpdateFilmeWithSessaoController, referenceUpdateSalaWithSessaoController, referenceUpdateSessaoWithIngressoController } from '../modules/ModuleReference';

const router = Router();

// update route
router.put('/movie/:id',(req,res)=>{
	return updateMovieController.handle(req,res);
});
// add on router update
router.post('/movieWithSession', (req, res) => {
	return referenceUpdateFilmeWithSessaoController.handle(req, res);
});

// add on router update
router.post('/roomWithSession', (req, res) => {
	return referenceUpdateSalaWithSessaoController.handle(req, res);
});

// add on router update
router.post('/sessionWithTicket', (req, res) => {
	return referenceUpdateSessaoWithIngressoController.handle(req, res);
});

export default router;