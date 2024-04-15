import { PostgreeTicketRepository } from '../../Repository/Implementations/TicketRepository';
import { FindByIdTicketController } from './FindByIdTicketController';
import { FindByIdTicketuseCase } from './FindByIdTicketUseCase';

export const ticketRepository = new PostgreeTicketRepository();
export const findByIdTicketusaCase = new FindByIdTicketuseCase(ticketRepository);
export const findByIdTicketController = new FindByIdTicketController(findByIdTicketusaCase);